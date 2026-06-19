import os
import platform
import socket
import sys
import threading
import time
import webbrowser
import logging

from streamlit.web import bootstrap


def _log_dir() -> str:
    if platform.system() == "Windows":
        base = os.environ.get("APPDATA") or os.path.expanduser("~")
        return os.path.join(base, "ATEM Audio Routing", "Logs")
    return os.path.join(os.path.expanduser("~"), "Library", "Logs", "ATEM Audio Routing")


def _node_bin(base_dir: str) -> str:
    if platform.system() == "Windows":
        return os.path.join(base_dir, "node_runtime", "node.exe")
    return os.path.join(base_dir, "node_runtime", "bin", "node")


def _find_free_port() -> int:
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.bind(("127.0.0.1", 0))
    port = sock.getsockname()[1]
    sock.close()
    return port


def _wait_port(host: str, port: int, timeout_sec: float = 20.0) -> bool:
    end_time = time.time() + timeout_sec
    while time.time() < end_time:
        try:
            sock = socket.create_connection((host, port), timeout=0.2)
            sock.close()
            return True
        except OSError:
            time.sleep(0.2)
    return False


def _app_base_dir() -> str:
    return getattr(sys, "_MEIPASS", os.path.dirname(os.path.abspath(__file__)))


def main() -> None:
    log_dir = _log_dir()
    os.makedirs(log_dir, exist_ok=True)
    log_path = os.path.join(log_dir, "app.log")
    logging.basicConfig(
        filename=log_path,
        level=logging.INFO,
        format="%(asctime)s %(levelname)s %(message)s"
    )
    try:
        log_file = open(log_path, "a")
        sys.stdout = log_file
        sys.stderr = log_file
    except Exception:
        logging.exception("Failed to redirect stdout/stderr")
    logging.info("Launcher start")

    base_dir = _app_base_dir()
    logging.info("Base dir: %s", base_dir)
    os.environ["ATEM_APP_BASE"] = base_dir

    node_bin = _node_bin(base_dir)
    if os.path.exists(node_bin):
        os.environ["ATEM_NODE_BIN"] = node_bin
        os.environ["PATH"] = os.path.dirname(node_bin) + os.pathsep + os.environ.get("PATH", "")
        logging.info("Node runtime: %s", node_bin)
    else:
        logging.info("Node runtime not found at %s", node_bin)

    data_dir = os.path.join(os.path.expanduser("~"), "Documents", "ATEM Audio Routing")
    try:
        os.makedirs(data_dir, exist_ok=True)
        os.chdir(data_dir)
        logging.info("Working dir: %s", data_dir)
    except Exception:
        logging.exception("Failed to set working dir")

    port = _find_free_port()
    url = f"http://127.0.0.1:{port}"
    logging.info("Streamlit URL: %s", url)

    def _open_browser() -> None:
        if _wait_port("127.0.0.1", port, timeout_sec=30.0):
            try:
                webbrowser.open(url)
                logging.info("Browser opened")
            except Exception:
                logging.exception("Failed to open browser")
        else:
            logging.info("Streamlit port not ready after timeout")

    threading.Thread(target=_open_browser, daemon=True).start()

    app_path = os.path.join(base_dir, "atem_gui.py")
    logging.info("App path: %s", app_path)
    flag_options = {
        "server.port": port,
        "server.address": "127.0.0.1",
        "server.headless": True,
        "browser.gatherUsageStats": False,
        "global.developmentMode": False,
        # Theme (packaged app does not pick up ./.streamlit/config.toml because
        # the working dir is the user's Documents folder, so set it explicitly).
        "theme.base": "dark",
        "theme.primaryColor": "#38bdf8",
        "theme.backgroundColor": "#0b0f14",
        "theme.secondaryBackgroundColor": "#151b23",
        "theme.textColor": "#e6edf3",
    }
    try:
        logging.info("Starting Streamlit bootstrap")
        # Streamlit >=1.5x no longer applies flag_options inside bootstrap.run()
        # (the `streamlit run` CLI does it before calling run). Since we call
        # bootstrap.run() directly, apply them ourselves or the configured port,
        # headless mode, etc. are ignored and the server falls back to :8501.
        if hasattr(bootstrap, "load_config_options"):
            bootstrap.load_config_options(flag_options=flag_options)
        bootstrap.run(app_path, False, [], flag_options)
        logging.info("Streamlit bootstrap finished")
    except SystemExit as e:
        logging.exception("Streamlit exited: %s", e)
    except Exception:
        logging.exception("Streamlit bootstrap failed")


if __name__ == "__main__":
    main()
