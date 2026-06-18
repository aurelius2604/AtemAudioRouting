import struct

import pytest

from atem_core.commands import AudioOutputRoutingCommand, AudioRoutingOutputCommand


@pytest.mark.unit
def test_caos_command_exact_bytes():
    # output=3, pair=1, source=7 -> header(len=12) + 'CAOS' + payload
    result = AudioOutputRoutingCommand(output=3, source=7, pair=1).get_command()
    assert result == b"\x00\x0c\x00\x00CAOS\x03\x01\x00\x07"


@pytest.mark.unit
def test_caos_payload_packs_source_as_u16():
    result = AudioOutputRoutingCommand(output=1, source=300, pair=0).get_command()
    payload = result[8:]  # after 4-byte header + 4-byte name
    output, pair, source = struct.unpack(">B B H", payload)
    assert (output, pair, source) == (1, 0, 300)


@pytest.mark.unit
def test_aroc_extended_layout():
    result = AudioRoutingOutputCommand(output_id=10, source_id=20).get_command()
    assert b"AROC" in result
    payload = result[8:]
    assert len(payload) == 80  # 1 + 3pad + 4 + 4 + 2 + 2 + 64
    flag, output_id, source_id, ext, intp, name = struct.unpack(">B 3x I I H H 64s", payload)
    assert flag == 1
    assert output_id == 10
    assert source_id == 20
    assert name == b"\x00" * 64


@pytest.mark.unit
def test_aroc_legacy_layout_is_shorter():
    result = AudioRoutingOutputCommand(output_id=10, source_id=20, include_ports=False).get_command()
    payload = result[8:]
    assert len(payload) == 76  # 1 + 3pad + 4 + 4 + 64 (no ext/int ports)


@pytest.mark.unit
def test_aroc_include_name_sets_flag_bit():
    result = AudioRoutingOutputCommand(output_id=1, source_id=2, name="MIX", include_name=True).get_command()
    flag = result[8]
    assert flag & 0b10  # name bit set
    assert b"MIX" in result
