"""Load/export ATEM XML configuration for audio routing."""
import glob
import os
import re
import xml.etree.ElementTree as ET
from typing import Optional

from atem_core.constants import PAIR_LABELS
from atem_core.routing import RoutingState


def load_xml_audio_mapping(directory: str = ".") -> Optional[dict]:
    """Пробует загрузить последнюю XML-конфигурацию ATEM из указанной папки."""
    pattern = "*.xml" if directory == "." else os.path.join(directory, "*.xml")
    xml_files = sorted(glob.glob(pattern), key=os.path.getmtime, reverse=True)
    if not xml_files:
        return None
    path = xml_files[0]
    try:
        tree = ET.parse(path)
        root = tree.getroot()
    except Exception:
        return None

    input_labels = {}
    for inp in root.findall(".//Settings/Inputs/Input"):
        try:
            idx = int(inp.get("id"))
        except Exception:
            continue
        label = inp.get("longName") or inp.get("shortName") or f"Input {idx}"
        input_labels[idx] = label

    audio_sources = {}
    for src in root.findall(".//AudioMapping/AudioSources/Source"):
        try:
            sid = int(src.get("id"))
        except Exception:
            continue
        name = src.get("name") or f"Source {sid}"
        audio_sources[sid] = name

    pretty_sources = {}
    input_re = re.compile(r"^Input (\d+) (\d+/\d+)$")
    for sid, name in audio_sources.items():
        m = input_re.match(name)
        if m:
            idx = int(m.group(1))
            pair = m.group(2)
            label = input_labels.get(idx, f"Input {idx}")
            pretty_sources[sid] = f"{label} {pair}"
        else:
            pretty_sources[sid] = name

    audio_outputs = {}
    max_aux = 0
    aux_re = re.compile(r"^Aux(\d+) (\d+/\d+)$")
    for out in root.findall(".//AudioMapping/AudioOutputs/Output"):
        name = out.get("name") or ""
        sid = out.get("sourceId")
        if sid is None:
            continue
        m = aux_re.match(name)
        if not m:
            continue
        try:
            aux = int(m.group(1))
            pair_label = m.group(2)
            pair_idx = PAIR_LABELS.index(pair_label) + 1
            audio_outputs[(aux, pair_idx)] = int(sid)
            max_aux = max(max_aux, aux)
        except Exception:
            continue

    return {
        "path": path,
        "input_labels": input_labels,
        "audio_sources": pretty_sources,
        "audio_outputs": audio_outputs,
        "aux_count": max_aux
    }


def export_xml_with_routing(xml_path: str, state: RoutingState) -> Optional[str]:
    """Экспортирует XML с обновленными AudioMapping/AudioOutputs."""
    try:
        tree = ET.parse(xml_path)
        root = tree.getroot()
    except Exception:
        return None

    updated = False
    aux_re = re.compile(r"^Aux(\d+) (\d+/\d+)$")
    for out in root.findall(".//AudioMapping/AudioOutputs/Output"):
        name = out.get("name") or ""
        m = aux_re.match(name)
        if not m:
            continue
        try:
            aux = int(m.group(1))
            pair_label = m.group(2)
            pair_idx = PAIR_LABELS.index(pair_label) + 1
        except Exception:
            continue
        src = state.get_route(aux, pair_idx)
        if src is None:
            continue
        out.set("sourceId", str(int(src)))
        updated = True

    if not updated:
        return None

    base, ext = os.path.splitext(xml_path)
    out_path = f"{base}__audio_routed{ext}"
    try:
        tree.write(out_path, encoding="UTF-8", xml_declaration=True)
    except Exception:
        return None
    return out_path
