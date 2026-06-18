"""In-memory audio routing state (AUX/pair -> source)."""
from dataclasses import dataclass, field
from typing import Dict, Optional, Tuple


@dataclass
class RoutingState:
    """Состояние роутинга аудио"""
    aux_pair_to_source: Dict[Tuple[int, int], int] = field(default_factory=dict)
    source_names: Dict[int, str] = field(default_factory=dict)
    max_aux_seen: int = 0
    max_source_seen: int = 0
    available_sources: Dict[int, str] = field(default_factory=dict)
    aux_index_base: Optional[int] = None
    xml_sources: Dict[int, str] = field(default_factory=dict)
    xml_routes_loaded: bool = False
    xml_aux_count: int = 0
    audio_output_ids: Dict[Tuple[int, int], int] = field(default_factory=dict)
    routing_sources: Dict[int, str] = field(default_factory=dict)
    audio_output_meta: Dict[int, Tuple[int, int, str]] = field(default_factory=dict)
    last_audio_output_meta: Optional[Tuple[int, int, str]] = None
    aux_output_names: Dict[int, str] = field(default_factory=dict)

    def set_route(self, aux: int, pair: int, source: int):
        """Устанавливает роутинг"""
        self.aux_pair_to_source[(aux, pair)] = source
        self.max_aux_seen = max(self.max_aux_seen, aux)
        if isinstance(source, int):
            if 1 <= source <= 200:
                self.max_source_seen = max(self.max_source_seen, source)

    def get_route(self, aux: int, pair: int) -> Optional[int]:
        """Получает текущий роутинг"""
        return self.aux_pair_to_source.get((aux, pair))

    def set_source_name(self, idx: int, name: str):
        """Обновляет имя источника, если оно ещё не задано."""
        if idx is None:
            return
        try:
            iidx = int(idx)
        except Exception:
            return
        self.source_names[iidx] = str(name)
        if 1 <= iidx <= 200:
            self.max_source_seen = max(self.max_source_seen, iidx)
        # Обновляем аудио-роутинг источники "Input N X/Y" на кастомное имя
        prefix = f"Input {iidx} "
        for sid, label in list(self.routing_sources.items()):
            if isinstance(label, str) and label.startswith(prefix):
                suffix = label[len(prefix):]
                self.routing_sources[sid] = f"{name} {suffix}"

    def load_xml_mapping(self, sources: Dict[int, str], routes: Dict[Tuple[int, int], int], aux_count: int):
        """Загружает источники и маршруты из XML."""
        if sources:
            self.xml_sources = sources
            if not self.routing_sources:
                self.routing_sources = dict(sources)
        if aux_count:
            self.xml_aux_count = max(self.xml_aux_count, aux_count)
        if not self.xml_routes_loaded and routes:
            for (aux, pair), src in routes.items():
                self.set_route(aux, pair, src)
            self.xml_routes_loaded = True

    def set_audio_output_id(self, aux: int, pair: int, output_id: int):
        self.audio_output_ids[(aux, pair)] = output_id
