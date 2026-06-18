"""TCP/JSONL client to the Node.js AROC backend (tools/aroc_server.js)."""
import json
import socket

_TIMEOUT = 6.0


def _request(payload: dict, host: str, port: int, timeout: float = _TIMEOUT) -> dict:
    """Send one JSONL request and return the parsed JSON response (or an error dict)."""
    data = (json.dumps(payload) + "\n").encode("utf-8")
    try:
        with socket.create_connection((host, int(port)), timeout=timeout) as sock:
            sock.sendall(data)
            sock.settimeout(timeout)
            buff = b""
            while b"\n" not in buff:
                chunk = sock.recv(4096)
                if not chunk:
                    break
                buff += chunk
        line = buff.split(b"\n")[0].decode("utf-8", errors="ignore").strip()
        return json.loads(line) if line else {"ok": False, "error": "empty response"}
    except Exception as e:
        return {"ok": False, "error": str(e)}


def send_node_aroc(output_id: int, source_id: int, host: str, port: int) -> dict:
    """Отправляет команду роутинга в node backend (JSONL)."""
    return _request(
        {"cmd": "set", "outputId": int(output_id), "sourceId": int(source_id)},
        host,
        port,
    )


def send_node_status(host: str, port: int) -> dict:
    """Запрашивает статус у node backend."""
    return _request({"cmd": "status"}, host, port)


def node_port_alive(host: str, port: int) -> bool:
    """Проверяет, отвечает ли node backend на сокет (независимо от subprocess)."""
    try:
        with socket.create_connection((host, int(port)), timeout=1.0):
            return True
    except Exception:
        return False
