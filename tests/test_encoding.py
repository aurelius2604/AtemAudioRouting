import pytest

from atem_core.encoding import decode_str


@pytest.mark.unit
def test_decode_str_stops_at_nul():
    assert decode_str(b"hello\x00world") == "hello"


@pytest.mark.unit
def test_decode_str_without_nul():
    assert decode_str(b"Camera 1") == "Camera 1"


@pytest.mark.unit
def test_decode_str_strips_whitespace():
    assert decode_str(b"  spaced  ") == "spaced"


@pytest.mark.unit
def test_decode_str_empty():
    assert decode_str(b"") == ""


@pytest.mark.unit
def test_decode_str_invalid_utf8_does_not_raise():
    # errors="ignore" drops the invalid byte rather than raising
    assert decode_str(b"ab\xffcd") == "abcd"
