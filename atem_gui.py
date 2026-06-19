"""
Streamlit GUI для визуализации и управления аудио роутингом ATEM
"""
import streamlit as st
import time
import threading
import os
import glob
import re
import json
import socket
import subprocess
import xml.etree.ElementTree as ET
from typing import Dict, Tuple, Optional
from dataclasses import dataclass, field
from concurrent.futures import ThreadPoolExecutor
from pyatem.protocol import AtemProtocol
from pyatem.command import Command
try:
    from streamlit.runtime.scriptrunner import add_script_run_ctx
except Exception:
    add_script_run_ctx = None
import struct
import logging

from atem_core.constants import PAIR_LABELS
from atem_core.encoding import decode_str as _decode_str
from atem_core.config import (
    config_path as _config_path,
    load_config as _load_config,
    save_config as _save_config,
)
from atem_core.routing import RoutingState
from atem_core.xml_mapping import (
    load_xml_audio_mapping as _load_xml_audio_mapping,
    export_xml_with_routing as _export_xml_with_routing,
)
from atem_core.commands import AudioOutputRoutingCommand, AudioRoutingOutputCommand
from atem_core.discovery import discover_atems, local_subnet_prefixes as _local_subnet_prefixes
from atem_core.node_bridge import (
    send_node_aroc as _send_node_aroc,
    send_node_status as _send_node_status,
    node_port_alive as _node_port_alive,
)

def _get_attr(obj, *names):
    """Пытается получить атрибут по нескольким возможным именам"""
    for n in names:
        if hasattr(obj, n):
            return getattr(obj, n)
    return None


# Глобальное состояние для Streamlit
if 'atem_switcher' not in st.session_state:
    st.session_state.atem_switcher = None
if 'routing_state' not in st.session_state:
    st.session_state.routing_state = RoutingState()
if 'connected' not in st.session_state:
    st.session_state.connected = False
if 'connection_thread' not in st.session_state:
    st.session_state.connection_thread = None
if 'stop_loop' not in st.session_state:
    st.session_state.stop_loop = False
st.session_state.transport = 'udp'  # Всегда UDP, как в Bitfocus Companion
if 'stop_event' not in st.session_state:
    st.session_state.stop_event = None
if 'last_sent' not in st.session_state:
    st.session_state.last_sent = None
if 'last_arop' not in st.session_state:
    st.session_state.last_arop = None
if 'aroc_mode' not in st.session_state:
    st.session_state.aroc_mode = "extended"
if 'aroc_mask' not in st.session_state:
    st.session_state.aroc_mask = "source"
if 'node_backend_enabled' not in st.session_state:
    st.session_state.node_backend_enabled = True
if 'node_host' not in st.session_state:
    st.session_state.node_host = "127.0.0.1"
if 'node_port' not in st.session_state:
    st.session_state.node_port = 9915
if 'last_node' not in st.session_state:
    st.session_state.last_node = None
if 'node_backend_autostart' not in st.session_state:
    st.session_state.node_backend_autostart = True
if 'node_process' not in st.session_state:
    st.session_state.node_process = None
if 'node_process_pid' not in st.session_state:
    st.session_state.node_process_pid = None
if 'node_backend_log' not in st.session_state:
    try:
        import platform as _platform
        if _platform.system() == "Windows":
            _log_base = os.environ.get("APPDATA") or os.path.expanduser("~")
            log_dir = os.path.join(_log_base, "ATEM Audio Routing", "Logs")
        else:
            log_dir = os.path.join(os.path.expanduser("~"), "Library", "Logs", "ATEM Audio Routing")
        os.makedirs(log_dir, exist_ok=True)
        st.session_state.node_backend_log = os.path.join(log_dir, "node_backend.log")
    except Exception:
        st.session_state.node_backend_log = os.path.abspath("node_backend.log")
if 'node_backend_log_handle' not in st.session_state:
    st.session_state.node_backend_log_handle = None
if 'node_backend_started_by_gui' not in st.session_state:
    st.session_state.node_backend_started_by_gui = False
if 'atem_ip' not in st.session_state:
    st.session_state.atem_ip = _load_config().get("atem_ip", "192.168.0.50")
if 'discovery_results' not in st.session_state:
    st.session_state.discovery_results = None  # None = ещё не искали, [] = искали и не нашли


def connect_to_atem(ip: str, transport: str = 'udp'):
    """Подключение к ATEM"""
    try:
        # Всегда UDP (как Bitfocus Companion)
        sw = AtemProtocol(ip)
        state = st.session_state.routing_state
        stop_event = threading.Event()

        def on_any_change(fieldname, field):
            fn = str(fieldname).lower()

            # Fairlight Audio Routing Source (ARSP)
            if fieldname in {"ARSP", b"ARSP"} and isinstance(field, (bytes, bytearray)):
                raw = bytes(field)
                if len(raw) >= 8:
                    source_id = int.from_bytes(raw[0:4], "big")
                    name = _decode_str(raw[8:72])
                    if name:
                        pair_idx = source_id & 0xFFFF
                        pair_label = PAIR_LABELS[pair_idx] if 0 <= pair_idx < len(PAIR_LABELS) else None
                        m = re.match(r"^Input (\d+)(?:\s+(\d+/\d+))?$", name)
                        if m:
                            idx = int(m.group(1))
                            pair = m.group(2) or pair_label
                            label = state.source_names.get(idx, f"Input {idx}")
                            if pair:
                                name = f"{label} {pair}"
                            else:
                                name = label
                        elif pair_label and re.match(r"^Program$", name):
                            name = f"Program {pair_label}"
                        state.routing_sources[source_id] = name
                return

            # Fairlight Audio Routing Output (AROP)
            if fieldname in {"AROP", b"AROP"} and isinstance(field, (bytes, bytearray)):
                raw = bytes(field)
                if len(raw) >= 8:
                    output_id = int.from_bytes(raw[0:4], "big")
                    source_id = int.from_bytes(raw[4:8], "big")
                    ext_port = int.from_bytes(raw[8:10], "big") if len(raw) >= 10 else 0
                    int_port = int.from_bytes(raw[10:12], "big") if len(raw) >= 12 else 0
                    name = _decode_str(raw[12:76]) if len(raw) >= 76 else ""
                    state.audio_output_meta[output_id] = (ext_port, int_port, name)
                    state.last_audio_output_meta = (ext_port, int_port, name)
                    aux_id = output_id >> 16
                    pair_idx = output_id & 0xFFFF
                    if aux_id >= 2001:
                        aux = aux_id - 2000
                        pair = pair_idx + 1
                        state.set_audio_output_id(aux, pair, output_id)
                        state.set_route(aux, pair, source_id)
                        st.session_state.last_arop = f"AUX {aux} {PAIR_LABELS[pair-1]} <- {source_id}"
                        # Derive custom aux name from AROP name field (strip pair suffix)
                        if name:
                            base = name
                            for pl in PAIR_LABELS:
                                if base.endswith(f" {pl}"):
                                    base = base[:-len(f" {pl}")]
                                    break
                            if base and not re.match(r"^[Aa]ux\s*\d+$", base):
                                state.aux_output_names[aux] = base
                return

            # Собираем имена источников (только реальные входы/аудио, без макросов и файлов)
            idx = _get_attr(field, "index", "id", "source", "source_id", "sourceId")
            name = _get_attr(field, "name", "label", "long_name", "short_name", "display_name")
            if idx is not None and name is not None:
                fn_src = any(word in fn for word in ["input", "source", "audio", "mic", "line", "fairlight", "embed"])
                fn_exclude = any(word in fn for word in ["macro", "clip", "file", "transfer", "media", "rec", "stream"])
                if fn_src and not fn_exclude:
                    state.set_source_name(idx, str(name))

            # FAIRLIGHT input map (включает TRS)
            if fn == "fairlight-audio-input":
                fa_idx = _get_attr(field, "index")
                fa_type = _get_attr(field, "type")
                fa_num = _get_attr(field, "number")
                if fa_idx is not None and fa_type is not None:
                    label = None
                    try:
                        fa_type_i = int(fa_type)
                        fa_num_i = int(fa_num) if fa_num is not None else 0
                        if fa_type_i == 0:
                            label = f"Input {fa_num_i}" if fa_num_i > 0 else f"Input {fa_idx}"
                        elif fa_type_i == 1:
                            label = f"Media {fa_num_i + 1}"
                        elif fa_type_i == 2:
                            label = f"TRS {fa_num_i + 1}"
                    except Exception:
                        label = None
                    if label:
                        state.set_source_name(fa_idx, label)

            # Специальный случай: AUX routing (aux-output-source)
            if fn == "aux-output-source":
                aux_raw = _get_attr(field, "index", "aux", "aux_index", "output", "output_index", "outputIndex")
                src_raw = _get_attr(field, "source", "source_index", "sourceIndex", "source_id", "sourceId", "input", "input_id")
                if aux_raw is not None and src_raw is not None:
                    try:
                        aux_idx = int(aux_raw)
                        if aux_idx == 0:
                            state.aux_index_base = 0
                        aux_ui = aux_idx + 1 if state.aux_index_base == 0 else aux_idx
                        src_ui = int(src_raw)
                        if src_ui >= 10000 and src_ui not in state.routing_sources:
                            if src_ui == 10010:
                                state.set_source_name(src_ui, "Master")
                            else:
                                state.set_source_name(src_ui, f"Bus {src_ui}")
                        existing = [state.get_route(aux_ui, p) for p in range(1, len(PAIR_LABELS) + 1)]
                        if all(v is None for v in existing) or all(v == src_ui for v in existing):
                            for p in range(1, len(PAIR_LABELS) + 1):
                                state.set_route(aux_ui, p, src_ui)
                    except Exception:
                        pass
                return

            # Общий поиск полей аудио-роутинга
            looks_audio = ("audio" in fn) or ("aud" in fn)
            looks_routing = ("rout" in fn) or ("map" in fn) or ("embed" in fn) or ("output" in fn) or ("aux" in fn)
            if not (looks_audio and looks_routing):
                return

            aux = _get_attr(field, "aux", "aux_index", "auxIndex", "output", "output_index", "outputIndex")
            pair = _get_attr(field, "pair", "pair_index", "pairIndex", "channel_pair", "channelPair", "channels")
            src = _get_attr(field, "source", "source_index", "sourceIndex", "source_id", "sourceId", "input", "input_id")

            try:
                if aux is not None and pair is not None and src is not None:
                    aux_i = int(aux)
                    if aux_i == 0:
                        state.aux_index_base = 0
                    aux_ui = aux_i + 1 if state.aux_index_base == 0 else aux_i

                    p = int(pair)
                    if p == 0:
                        p = 1
                    if 0 <= p <= 7:
                        p = p + 1
                    if 1 <= p <= 16:
                        p = (p + 1) // 2

                    src_ui = int(src)
                    state.set_route(aux_ui, p, src_ui)
            except Exception:
                pass
        
        sw.on("change", on_any_change)
        sw.on("connected", lambda: st.session_state.update(connected=True))
        sw.on("disconnected", lambda: st.session_state.update(connected=False))
        
        st.session_state.atem_switcher = sw
        st.session_state.stop_event = stop_event
        sw.connect()
        
        # Запускаем цикл обработки в отдельном потоке (не более одного)
        def loop_thread(sw_local, stop_evt):
            while not stop_evt.is_set():
                try:
                    sw_local.loop()
                    # Чуть реже опрашиваем, чтобы не спамить сетью и логом
                    time.sleep(0.02)
                except Exception as e:
                    print(f"Ошибка в цикле обработки: {e}")
                    break

        # Запускаем новый поток только если нет активного
        thread = st.session_state.get('connection_thread')
        if not thread or not thread.is_alive():
            st.session_state.stop_loop = False
            thread = threading.Thread(target=loop_thread, args=(sw, stop_event), daemon=True)
            # Привязываем контекст Streamlit, чтобы не было предупреждения ScriptRunContext
            if add_script_run_ctx:
                add_script_run_ctx(thread)
            thread.start()
            st.session_state.connection_thread = thread
        
        return True
    except Exception as e:
        st.error(f"Ошибка подключения: {e}")
        return False


def set_routing(aux: int, pair: int, source: int):
    """Устанавливает роутинг через команду"""
    try:
        # pair_index в команде 0-based (0=1/2, 1=3/4, ...)
        pair_index = pair - 1
        state = st.session_state.routing_state
        output_id = state.audio_output_ids.get((aux, pair))
        if output_id is None:
            output_id = ((2000 + aux) << 16) | pair_index

        if st.session_state.node_backend_enabled:
            result = _send_node_aroc(output_id, source, st.session_state.node_host, st.session_state.node_port)
            st.session_state.last_node = result
            if not result.get("ok"):
                st.error(f"Node backend error: {result.get('error')}")
                return False
        else:
            if not (st.session_state.atem_switcher and st.session_state.connected):
                return False
            ext_port, int_port, name = state.audio_output_meta.get(output_id, (0, 0, ""))
            if (ext_port, int_port, name) == (0, 0, "") and state.last_audio_output_meta:
                ext_port, int_port, name = state.last_audio_output_meta
                if not name:
                    name = f"Aux{aux} {PAIR_LABELS[pair-1]}"
            include_ports = st.session_state.aroc_mode == "extended"
            include_name = st.session_state.aroc_mask == "source+name"
            cmd = AudioRoutingOutputCommand(
                output_id=output_id,
                source_id=source,
                ext_port=ext_port,
                int_port=int_port,
                name=name,
                include_ports=include_ports,
                include_name=include_name
            )
            st.session_state.atem_switcher.send_commands([cmd])

        st.session_state.last_sent = f"AUX {aux} {PAIR_LABELS[pair-1]} -> {source} (id={output_id})"
        # Обновляем локальное состояние
        st.session_state.routing_state.set_route(aux, pair, source)
        return True
    except Exception as e:
        st.error(f"Ошибка установки роутинга: {e}")
        return False


def _node_backend_running() -> bool:
    proc = st.session_state.node_process
    if proc is not None and proc.poll() is None:
        return True
    # subprocess мог быть запущен в другой сессии браузера — проверяем сокет
    return _node_port_alive(st.session_state.node_host, st.session_state.node_port)


def _start_node_backend(atem_ip: str, port: int) -> dict:
    if _node_backend_running():
        return {"ok": True, "already": True, "pid": st.session_state.node_process_pid}
    try:
        base_dir = os.environ.get("ATEM_APP_BASE") or os.getcwd()
        node_bin = os.environ.get("ATEM_NODE_BIN") or "node"
        js_path = os.path.join(base_dir, "tools", "aroc_server.js")
        bundle_path = os.path.join(base_dir, "tools", "aroc_server.bundle.js")
        # Prefer non-bundled script when node_modules is available (dev env).
        # The bundle cannot load the atemSocketChild worker thread from a bundled file.
        node_modules_ok = os.path.isdir(os.path.join(base_dir, "node_modules"))
        if os.path.exists(js_path) and node_modules_ok:
            script_path = js_path
        elif os.path.exists(bundle_path):
            script_path = bundle_path
        else:
            script_path = js_path
        log_handle = st.session_state.node_backend_log_handle
        if log_handle is None or log_handle.closed:
            log_dir = os.path.dirname(st.session_state.node_backend_log)
            if log_dir:
                os.makedirs(log_dir, exist_ok=True)
            log_handle = open(st.session_state.node_backend_log, "ab")
            st.session_state.node_backend_log_handle = log_handle
        cmd = [node_bin, script_path, atem_ip, "--port", str(int(port))]
        proc = subprocess.Popen(cmd, stdout=log_handle, stderr=log_handle)
        st.session_state.node_process = proc
        st.session_state.node_process_pid = proc.pid
        st.session_state.node_backend_started_by_gui = True
        # Даём процессу 1.5 с на старт, потом проверяем
        time.sleep(1.5)
        if proc.poll() is not None:
            # Процесс упал — возможно EADDRINUSE, проверяем порт
            if _node_port_alive("127.0.0.1", port):
                return {"ok": True, "already": True, "note": "reused existing backend"}
            return {"ok": False, "error": f"backend exited with code {proc.returncode}"}
        return {"ok": True, "pid": proc.pid}
    except Exception as e:
        return {"ok": False, "error": str(e)}


def _stop_node_backend() -> dict:
    proc = st.session_state.node_process
    if proc is None:
        return {"ok": False, "error": "not running"}
    try:
        proc.terminate()
        proc.wait(timeout=2.0)
    except Exception:
        try:
            proc.kill()
        except Exception:
            pass
    st.session_state.node_process = None
    st.session_state.node_process_pid = None
    st.session_state.node_backend_started_by_gui = False
    return {"ok": True}


# Streamlit UI
st.set_page_config(
    page_title="ATEM Audio Routing",
    page_icon="🎚️",
    layout="wide",
    initial_sidebar_state="expanded",
)

# Приглушаем логирование pyatem, чтобы не спамить retransmission в UI
for name in ["AtemProtocol", "UdpTransport", "TcpTransport"]:
    logging.getLogger(name).setLevel(logging.CRITICAL)

# --- Control-surface theme (dark, broadcast-style) -------------------------
st.markdown(
    """
    <style>
    :root {
        --bg: #0b0f14; --surface: #151b23; --surface-2: #1b232d;
        --border: #283543; --text: #e6edf3; --muted: #8b98a8;
        --accent: #38bdf8; --good: #34d399; --bad: #f87171; --warn: #fbbf24;
    }
    .stApp {
        background: radial-gradient(1200px 600px at 82% -12%, #11212c 0%, var(--bg) 55%);
    }
    header[data-testid="stHeader"] { background: transparent; }
    section[data-testid="stSidebar"] {
        background: var(--surface); border-right: 1px solid var(--border);
    }
    section[data-testid="stSidebar"] h2 {
        font-size: .78rem; text-transform: uppercase; letter-spacing: 2px;
        color: var(--muted); font-weight: 700;
    }

    /* App header */
    .app-header {
        display: flex; align-items: center; justify-content: space-between;
        gap: 16px; padding: 16px 20px; margin: 0 0 16px;
        border: 1px solid var(--border); border-radius: 16px;
        background: linear-gradient(180deg, var(--surface-2), var(--surface));
        box-shadow: 0 12px 30px -18px #000;
    }
    .app-title {
        display: flex; align-items: center; gap: 12px;
        font-size: 1.5rem; font-weight: 700; letter-spacing: .3px; color: var(--text);
    }
    .app-logo { font-size: 1.55rem; }
    .app-sub {
        font-size: .68rem; text-transform: uppercase; letter-spacing: 2px;
        color: var(--muted); font-weight: 600;
        border-left: 1px solid var(--border); padding-left: 12px;
    }
    .status-pill {
        font-size: .72rem; font-weight: 700; letter-spacing: 1.2px;
        padding: 8px 16px; border-radius: 999px; border: 1px solid var(--border);
        white-space: nowrap;
    }
    .status-pill.ok {
        color: #05291d; background: var(--good);
        box-shadow: 0 0 18px -3px var(--good);
    }
    .status-pill.off { color: var(--muted); background: var(--surface-2); }

    /* Inputs & buttons */
    div[data-baseweb="select"] > div, .stTextInput input, .stNumberInput input {
        background: var(--surface-2) !important; border-color: var(--border) !important;
        border-radius: 10px !important;
    }
    .stButton > button {
        border-radius: 10px; border: 1px solid var(--border);
        background: var(--surface-2); color: var(--text); font-weight: 600;
        transition: border-color .15s ease, color .15s ease, transform .12s ease;
    }
    .stButton > button:hover {
        border-color: var(--accent); color: var(--accent); transform: translateY(-1px);
    }
    .stButton > button[kind="primary"] {
        background: var(--accent); color: #04222e; border-color: var(--accent);
    }

    /* Routing assignment cards */
    .assign-card {
        border: 1px solid var(--border); border-left: 3px solid var(--accent);
        background: var(--surface); border-radius: 10px;
        padding: 9px 14px; margin: 7px 0; color: var(--text);
    }
    .assign-card .aux { color: var(--accent); font-weight: 700; }

    /* Onboarding hero */
    .hero {
        border: 1px solid var(--border); border-radius: 16px; padding: 26px 28px;
        background: linear-gradient(180deg, var(--surface-2), var(--surface));
        color: var(--text);
    }
    .hero h3 { margin-top: 0; color: var(--text); }
    .hero ol { color: var(--muted); line-height: 1.9; margin: 0; padding-left: 20px; }

    /* --- Matrix layout (functional — keep) --- */
    div[data-testid="stHorizontalBlock"] { overflow-x: auto; }
    div[data-baseweb="select"] { min-width: 150px; width: 100%; }
    div[data-baseweb="select"] > div { min-height: 20px; font-size: 14px; }
    div[data-baseweb="select"] input { font-size: 14px; }
    div[data-baseweb="select"] span { white-space: normal; line-height: 1.2; }
    .pair-label { white-space: nowrap; display: inline-block; margin-left: -10px; color: var(--muted); }
    .pair-chip {
        text-align: center; font-variant-numeric: tabular-nums; font-weight: 700;
        font-size: 13px; color: var(--accent); background: var(--surface-2);
        border: 1px solid var(--border); border-radius: 8px; padding: 8px 0;
    }
    </style>
    """,
    unsafe_allow_html=True
)

# App header with live connection status
_hdr_connected = st.session_state.get("connected", False)
st.markdown(
    f"""
    <div class="app-header">
      <div class="app-title">
        <span class="app-logo">🎚️</span> ATEM Audio Routing
        <span class="app-sub">Fairlight&nbsp;AUX&nbsp;matrix</span>
      </div>
      <div class="status-pill {'ok' if _hdr_connected else 'off'}">
        {'● ПОДКЛЮЧЕНО' if _hdr_connected else '○ НЕ ПОДКЛЮЧЕНО'}
      </div>
    </div>
    """,
    unsafe_allow_html=True,
)

# Боковая панель для подключения
with st.sidebar:
    st.header("Подключение")
    xml_mapping = _load_xml_audio_mapping()
    if xml_mapping:
        st.caption(f"XML: {os.path.basename(xml_mapping['path'])}")
        st.session_state.routing_state.load_xml_mapping(
            xml_mapping.get("audio_sources", {}),
            xml_mapping.get("audio_outputs", {}),
            xml_mapping.get("aux_count", 0)
        )
        if st.button("Экспортировать XML с новым роутингом"):
            out_path = _export_xml_with_routing(xml_mapping["path"], st.session_state.routing_state)
            if out_path:
                st.success(f"Готово: {os.path.basename(out_path)}")
            else:
                st.error("Не удалось обновить XML (нет данных или ошибка чтения).")
    st.selectbox(
        "AROC формат",
        options=["extended", "legacy"],
        format_func=lambda x: "extended (80 bytes)" if x == "extended" else "legacy (76 bytes)",
        key="aroc_mode"
    )
    st.selectbox(
        "AROC маска",
        options=["source", "source+name"],
        format_func=lambda x: "sourceId (1)" if x == "source" else "sourceId+name (3)",
        key="aroc_mask"
    )
    st.checkbox("Node backend (AROC)", key="node_backend_enabled")
    st.text_input("Node host", key="node_host")
    st.number_input("Node port", min_value=1, max_value=65535, step=1, key="node_port")
    st.checkbox("Автозапуск backend", key="node_backend_autostart")
    if st.button("Запустить backend"):
        res = _start_node_backend(st.session_state.get("atem_ip", "127.0.0.1"), st.session_state.node_port)
        if res.get("ok"):
            st.success(f"Backend запущен (pid={res.get('pid')})")
        else:
            st.error(f"Ошибка запуска backend: {res.get('error')}")
    if st.button("Остановить backend"):
        res = _stop_node_backend()
        if res.get("ok"):
            st.success("Backend остановлен")
        else:
            st.error(f"Ошибка остановки backend: {res.get('error')}")
    if st.button("Проверить backend"):
        st.session_state.last_node = _send_node_status(st.session_state.node_host, st.session_state.node_port)
        if st.session_state.last_node.get("ok"):
            st.success("Node backend: OK")
        else:
            st.error(f"Node backend error: {st.session_state.last_node.get('error')}")
    atem_ip = st.text_input("IP адрес ATEM", key="atem_ip")

    col_find, col_clear = st.columns([3, 1])
    with col_find:
        if st.button("🔍 Найти ATEM в сети"):
            saved_ip = st.session_state.get("atem_ip", "")
            with st.spinner("Поиск устройств (mDNS + UDP)…"):
                st.session_state.discovery_results = discover_atems(extra_ip=saved_ip or None)
    with col_clear:
        if st.button("✕", help="Сбросить результаты поиска"):
            st.session_state.discovery_results = None

    res = st.session_state.discovery_results
    if res is None:
        pass  # ещё не искали
    elif len(res) == 0:
        subnets = _local_subnet_prefixes()
        st.warning(f"Устройства не найдены. Сканировалось: {', '.join(f'{p}.x' for p in subnets) or 'нет активных интерфейсов'}. Проверьте подключение кабеля к ATEM.")
    else:
        st.caption(f"Найдено: {len(res)}")
        for dev in res:
            label = f"{dev['name']}  —  {dev['ip']}"
            if st.button(label, key=f"pick_{dev['ip']}"):
                st.session_state.atem_ip = dev["ip"]
                st.rerun()

    if st.button("Подключиться", type="primary"):
        if st.session_state.node_backend_enabled and st.session_state.node_backend_autostart:
            _start_node_backend(atem_ip, st.session_state.node_port)
        if connect_to_atem(atem_ip, 'udp'):
            _save_config({"atem_ip": atem_ip})
            st.success("Подключено!")
        else:
            st.error("Не удалось подключиться")

    if st.session_state.connected:
        st.success("✅ Подключено")
        if st.session_state.node_backend_enabled:
            if _node_backend_running():
                st.caption(f"Node backend: running (pid={st.session_state.node_process_pid})")
            else:
                st.caption("Node backend: not running")
        if st.button("Отключиться"):
            st.session_state.stop_loop = True
            thread = st.session_state.get('connection_thread')
            stop_evt = st.session_state.get('stop_event')
            if stop_evt:
                stop_evt.set()
            if thread and thread.is_alive():
                thread.join(timeout=0.5)
            st.session_state.atem_switcher = None
            st.session_state.connected = False
            st.session_state.connection_thread = None
            st.session_state.stop_event = None
            st.rerun()
    else:
        st.warning("Не подключено")

# Основной интерфейс
if st.session_state.connected:
    state = st.session_state.routing_state
    
    # Получаем список источников: если есть XML AudioMapping, используем его
    if state.routing_sources:
        sources = dict(state.routing_sources)
    elif state.xml_sources:
        sources = dict(state.xml_sources)
    else:
        sources = {}
        base_max = max(state.max_source_seen, 20)
        for i in range(1, base_max + 1):
            sources[i] = state.source_names.get(i, f"Input {i}")

    # Сортируем источники по индексу
    sorted_sources = sorted(sources.items())
    
    # Определяем количество AUX (fallback 12)
    aux_count = max(state.max_aux_seen, state.xml_aux_count, 12)
    
    st.subheader("Матрица роутинга аудио")
    st.caption("Если не помещается по ширине — скролл по горизонтали.")
    view_mode = st.radio(
        "Вид",
        options=["AUX (крупные поля)", "Матрица"],
        horizontal=True,
        index=0
    )

    source_options = {idx: name for idx, name in sorted_sources}
    source_options[0] = "No Audio"

    if view_mode == "Матрица":
        # Шапка матрицы
        header_cols = st.columns([6.0] + [288.0] * aux_count)
        header_cols[0].markdown('<span class="pair-label"><strong>Пары</strong></span>', unsafe_allow_html=True)
        for aux_idx in range(1, aux_count + 1):
            aux_label = state.aux_output_names.get(aux_idx, f"AUX {aux_idx}")
            header_cols[aux_idx].write(f"**{aux_label}**")

        # Создаем матрицу (строки — пары 1/2..15/16, столбцы — AUX)
        for pair_idx, pair_label in enumerate(PAIR_LABELS, start=1):
            cols = st.columns([6.0] + [288.0] * aux_count)

            with cols[0]:
                st.markdown(f'<span class="pair-label"><strong>{pair_label}</strong></span>', unsafe_allow_html=True)

            for aux_idx in range(1, aux_count + 1):
                with cols[aux_idx]:
                    current_source = state.get_route(aux_idx, pair_idx) or 0
                    selected = st.selectbox(
                        f"AUX {aux_idx} • {pair_label}",
                        options=list(source_options.keys()),
                        format_func=lambda x: source_options.get(x, str(x)),
                        index=list(source_options.keys()).index(current_source) if current_source in source_options else 0,
                        key=f"aux_{aux_idx}_pair_{pair_idx}",
                        label_visibility="collapsed"
                    )
                    if selected != current_source:
                        set_routing(aux_idx, pair_idx, selected)
                        time.sleep(0.1)
    else:
        aux_focus = st.selectbox(
            "AUX выход",
            options=list(range(1, aux_count + 1)),
            format_func=lambda x: state.aux_output_names.get(x, f"AUX {x}"),
            index=0
        )
        for pair_idx, pair_label in enumerate(PAIR_LABELS, start=1):
            current_source = state.get_route(aux_focus, pair_idx) or 0
            lab_col, sel_col = st.columns([1, 7], vertical_alignment="center")
            with lab_col:
                st.markdown(f'<div class="pair-chip">{pair_label}</div>', unsafe_allow_html=True)
            with sel_col:
                selected = st.selectbox(
                    f"AUX {aux_focus} • {pair_label}",
                    options=list(source_options.keys()),
                    format_func=lambda x: source_options.get(x, str(x)),
                    index=list(source_options.keys()).index(current_source) if current_source in source_options else 0,
                    key=f"aux_focus_{aux_focus}_pair_{pair_idx}",
                    label_visibility="collapsed"
                )
            if selected != current_source:
                set_routing(aux_focus, pair_idx, selected)
                time.sleep(0.1)
    
    # Информационная панель
    with st.expander("Информация о подключении"):
        st.write(f"AUX выходов: {aux_count}")
        st.write(f"Источников обнаружено: {len(sources)}")
        st.write(f"AROP метаданных: {len(state.audio_output_meta)}")
        # Качество связи убрали из-за отрицательных значений при потере пакетов
        if st.session_state.last_sent:
            st.write(f"Последняя отправка: {st.session_state.last_sent}")
        if st.session_state.last_arop:
            st.write(f"Последний ответ AROP: {st.session_state.last_arop}")
        if st.session_state.last_node:
            st.write(f"Node backend: {st.session_state.last_node}")

    # Краткое описание текущих назначений
    st.subheader("Текущие назначения")
    if state.aux_pair_to_source:
        for aux in range(1, aux_count + 1):
            rows = []
            for pi, pair_label in enumerate(PAIR_LABELS, start=1):
                src_idx = state.get_route(aux, pi)
                if src_idx:
                    src_label = sources.get(src_idx, f"src:{src_idx}")
                    rows.append(f"{pair_label} → {src_label}")
            if rows:
                aux_label = state.aux_output_names.get(aux, f"AUX {aux}")
                st.markdown(
                    f'<div class="assign-card"><span class="aux">{aux_label}</span> &nbsp; '
                    + " &nbsp;·&nbsp; ".join(rows)
                    + "</div>",
                    unsafe_allow_html=True,
                )
    else:
        st.write("Пока нет данных о назначениях. Дождитесь обновления от ATEM.")
    
else:
    st.markdown(
        """
        <div class="hero">
          <h3>Подключитесь к ATEM, чтобы начать</h3>
          <ol>
            <li>Введите IP-адрес микшера ATEM (или нажмите «🔍 Найти ATEM в сети»)</li>
            <li>Нажмите «Подключиться»</li>
            <li>Появится матрица роутинга: AUX-выходы × стереопары</li>
            <li>Меняйте источники в выпадающих списках — команды уходят в ATEM</li>
          </ol>
        </div>
        """,
        unsafe_allow_html=True,
    )
