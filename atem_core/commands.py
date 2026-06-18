"""ATEM protocol commands for audio output routing."""
import struct

from pyatem.command import Command


class AudioOutputRoutingCommand(Command):
    """
    Команда для установки аудио роутинга на AUX выходы.
    Основано на протоколе ATEM - команда 'CAOS' (Set Audio Output Source)
    """
    def __init__(self, output: int, source: int, pair: int = 0):
        """
        :param output: Индекс AUX выхода (1-based)
        :param source: Индекс источника (source index)
        :param pair: Индекс пары каналов (0-based: 0=1/2, 1=3/4, и т.д.)
        """
        self.output = output
        self.source = source
        self.pair = pair

    def get_command(self):
        # Формат команды CAOS: output (u8), pair (u8), source (u16)
        data = struct.pack('>B B H', self.output, self.pair, self.source)
        return self._make_command('CAOS', data)


class AudioRoutingOutputCommand(Command):
    """
    Команда Fairlight Audio Routing Output (AROC).
    Устанавливает источник для audio routing output (32-bit sourceId).
    """
    def __init__(
        self,
        output_id: int,
        source_id: int,
        ext_port: int = 0,
        int_port: int = 0,
        name: str = "",
        include_ports: bool = True,
        include_name: bool = False
    ):
        self.output_id = output_id
        self.source_id = source_id
        self.ext_port = ext_port
        self.int_port = int_port
        self.name = name
        self.include_ports = include_ports
        self.include_name = include_name

    def get_command(self):
        flag = 1  # sourceId
        if self.include_name:
            flag |= 2
        name_bytes = (self.name or "").encode("utf-8")[:64]
        name_bytes = name_bytes + b"\x00" * (64 - len(name_bytes))
        if self.include_ports:
            # Формат AROC (extended): flag(u8), pad(3), output_id(u32), source_id(u32),
            # ext(u16), int(u16), name(64)
            data = struct.pack(
                '>B 3x I I H H 64s',
                flag, self.output_id, self.source_id,
                self.ext_port, self.int_port, name_bytes,
            )
        else:
            # Формат AROC (legacy): flag(u8), pad(3), output_id(u32), source_id(u32), name(64)
            data = struct.pack('>B 3x I I 64s', flag, self.output_id, self.source_id, name_bytes)
        return self._make_command('AROC', data)
