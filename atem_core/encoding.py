"""Byte/string helpers for ATEM protocol payloads."""


def decode_str(raw: bytes) -> str:
    """Decode a NUL-terminated UTF-8 byte string into a stripped str."""
    if not raw:
        return ""
    try:
        end = raw.index(0)
        raw = raw[:end]
    except ValueError:
        pass
    try:
        return raw.decode("utf-8", errors="ignore").strip()
    except Exception:
        return ""
