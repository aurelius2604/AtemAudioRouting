import json
import socket
import threading

import pytest

from atem_core import node_bridge


class _FakeNodeServer:
    """Minimal one-shot JSONL server that records the request and replies."""

    def __init__(self, response: dict):
        self.response = response
        self.received = None
        self._sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        self._sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        self._sock.bind(("127.0.0.1", 0))
        self._sock.listen(1)
        self.port = self._sock.getsockname()[1]
        self._thread = threading.Thread(target=self._serve, daemon=True)

    def __enter__(self):
        self._thread.start()
        return self

    def _serve(self):
        try:
            conn, _ = self._sock.accept()
            with conn:
                buff = b""
                while b"\n" not in buff:
                    chunk = conn.recv(4096)
                    if not chunk:
                        break
                    buff += chunk
                self.received = buff.split(b"\n")[0].decode("utf-8")
                conn.sendall((json.dumps(self.response) + "\n").encode("utf-8"))
        except Exception:
            pass

    def __exit__(self, *exc):
        try:
            self._sock.close()
        except Exception:
            pass


@pytest.mark.integration
def test_send_node_status_roundtrip():
    with _FakeNodeServer({"ok": True, "state": "ready"}) as srv:
        result = node_bridge.send_node_status("127.0.0.1", srv.port)
    assert result == {"ok": True, "state": "ready"}
    srv._thread.join(timeout=2)
    assert json.loads(srv.received) == {"cmd": "status"}


@pytest.mark.integration
def test_send_node_aroc_sends_expected_payload():
    with _FakeNodeServer({"ok": True}) as srv:
        result = node_bridge.send_node_aroc(131073, 1300, "127.0.0.1", srv.port)
    assert result == {"ok": True}
    srv._thread.join(timeout=2)
    assert json.loads(srv.received) == {"cmd": "set", "outputId": 131073, "sourceId": 1300}


@pytest.mark.unit
def test_request_to_closed_port_returns_error():
    # Port 1 is not listening -> connection refused, wrapped as error dict
    result = node_bridge.send_node_status("127.0.0.1", 1)
    assert result["ok"] is False
    assert "error" in result


@pytest.mark.integration
def test_node_port_alive_true_when_listening():
    with _FakeNodeServer({"ok": True}) as srv:
        assert node_bridge.node_port_alive("127.0.0.1", srv.port) is True


@pytest.mark.unit
def test_node_port_alive_false_when_closed():
    assert node_bridge.node_port_alive("127.0.0.1", 1) is False
