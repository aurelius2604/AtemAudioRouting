import json

import pytest

from atem_core import config


@pytest.fixture
def tmp_config(tmp_path, monkeypatch):
    path = tmp_path / "config.json"
    monkeypatch.setattr(config, "config_path", lambda: str(path))
    return path


@pytest.mark.unit
def test_load_config_missing_returns_empty(tmp_config):
    assert config.load_config() == {}


@pytest.mark.unit
def test_save_then_load_roundtrip(tmp_config):
    config.save_config({"atem_ip": "192.168.0.50"})
    assert config.load_config() == {"atem_ip": "192.168.0.50"}


@pytest.mark.unit
def test_save_config_merges_existing(tmp_config):
    config.save_config({"atem_ip": "10.0.0.1"})
    config.save_config({"node_port": 9915})
    data = config.load_config()
    assert data == {"atem_ip": "10.0.0.1", "node_port": 9915}


@pytest.mark.unit
def test_load_config_corrupt_returns_empty(tmp_config):
    tmp_config.write_text("{ not valid json")
    assert config.load_config() == {}


@pytest.mark.unit
def test_saved_file_is_valid_json(tmp_config):
    config.save_config({"a": 1})
    assert json.loads(tmp_config.read_text()) == {"a": 1}
