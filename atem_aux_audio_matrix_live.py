from __future__ import annotations

import time
from dataclasses import dataclass, field
from typing import Dict, Tuple, Optional

from rich.console import Console
from rich.live import Live
from rich.table import Table

from pyatem.protocol import AtemProtocol

PAIR_LABELS = ["1/2", "3/4", "5/6", "7/8", "9/10", "11/12", "13/14", "15/16"]


def _get_attr(obj, *names):
    """Пытается получить атрибут по нескольким возможным именам"""
    for n in names:
        if hasattr(obj, n):
            return getattr(obj, n)
    return None


@dataclass
class RoutingState:
    # key: (aux_index, pair_index) -> source_label
    aux_pair_to_source: Dict[Tuple[int, int], str] = field(default_factory=dict)
    # optional mapping if we can discover names
    source_names: Dict[int, str] = field(default_factory=dict)
    # discovered aux count guess
    max_aux_seen: int = 0

    def set_route(self, aux: int, pair: int, source: int | str):
        if isinstance(source, int):
            label = self.source_names.get(source, f"src:{source}")
        else:
            label = str(source)
        self.aux_pair_to_source[(aux, pair)] = label
        self.max_aux_seen = max(self.max_aux_seen, aux)

    def render_table(self) -> Table:
        aux_count = max(self.max_aux_seen, 1)
        t = Table(title="ATEM AUX Audio Routing (live)")
        t.add_column("Pair", no_wrap=True)

        for aux in range(1, aux_count + 1):
            t.add_column(f"AUX {aux}", overflow="fold")

        for pi, pair_label in enumerate(PAIR_LABELS, start=1):
            row = [pair_label]
            for aux in range(1, aux_count + 1):
                row.append(self.aux_pair_to_source.get((aux, pi), "—"))
            t.add_row(*row)
        return t


def main(ip: str):
    console = Console()
    state = RoutingState()

    sw = AtemProtocol(ip)

    # --- эвристика: ловим любые изменения и пытаемся вытащить "aux/pair/source"
    def on_any_change(fieldname, field):
        fn = str(fieldname).lower()

        # 1) иногда прилетают имена источников/входов — пробуем вытащить
        # (форматы могут отличаться, поэтому максимально мягко)
        # Часто поля имеют что-то вроде: index/id + name/label
        idx = _get_attr(field, "index", "id", "source", "source_id", "sourceId")
        name = _get_attr(field, "name", "label", "long_name", "short_name", "display_name")
        if idx is not None and name is not None:
            try:
                state.source_names[int(idx)] = str(name)
            except Exception:
                pass

        # 2) аудио-роутинг на выход: ищем по fieldname и по атрибутам объекта
        # Хотим достать: aux/output + pair/channels + source
        looks_audio = ("audio" in fn) or ("aud" in fn)
        looks_routing = ("rout" in fn) or ("map" in fn) or ("embed" in fn) or ("output" in fn) or ("aux" in fn)
        if not (looks_audio and looks_routing):
            return

        aux = _get_attr(field, "aux", "aux_index", "auxIndex", "output", "output_index", "outputIndex")
        pair = _get_attr(field, "pair", "pair_index", "pairIndex", "channel_pair", "channelPair", "channels")
        src = _get_attr(field, "source", "source_index", "sourceIndex", "source_id", "sourceId", "input", "input_id")

        # Нормализуем
        try:
            if aux is not None and pair is not None and src is not None:
                aux_i = int(aux)

                # pair может прилетать как 0..7 или 1..8 или 1..16 (по каналу)
                p = int(pair)
                if p == 0:
                    p = 1
                if 0 <= p <= 7:
                    p = p + 1
                if 1 <= p <= 16:
                    # если прилетел "канал", то превращаем в стерео-пару
                    # 1-2 => 1, 3-4 => 2, ...
                    p = (p + 1) // 2

                src_i = int(src) if str(src).isdigit() else str(src)
                state.set_route(aux_i, p, src_i)
        except Exception:
            # если формат неожиданный — просто игнорим
            return

    sw.on("change", on_any_change)

    console.print(f"Connecting to ATEM at {ip}:9910 ...")
    sw.connect()

    with Live(state.render_table(), console=console, refresh_per_second=8) as live:
        while True:
            sw.loop()  # важно вызывать часто
            live.update(state.render_table())
            time.sleep(0.01)


if __name__ == "__main__":
    import sys
    if len(sys.argv) < 2:
        print("Usage: python atem_aux_audio_matrix_live.py <ATEM_IP>")
        sys.exit(1)
    main(sys.argv[1])


