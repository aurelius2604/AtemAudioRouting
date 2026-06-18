"""Persisted user config (last ATEM IP, etc.) under ~/Documents."""
import json
import os


def config_path() -> str:
    data_dir = os.path.join(os.path.expanduser("~"), "Documents", "ATEM Audio Routing")
    os.makedirs(data_dir, exist_ok=True)
    return os.path.join(data_dir, "config.json")


def load_config() -> dict:
    try:
        with open(config_path()) as f:
            return json.load(f)
    except Exception:
        return {}


def save_config(data: dict) -> None:
    try:
        existing = load_config()
        existing.update(data)
        with open(config_path(), "w") as f:
            json.dump(existing, f, indent=2)
    except Exception:
        pass
