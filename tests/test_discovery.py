import pytest

from atem_core import discovery


@pytest.fixture
def no_network(monkeypatch):
    """Replace the real mDNS/UDP scans with controllable stubs."""
    monkeypatch.setattr(discovery, "_discover_atems_mdns", lambda timeout=2.5: [])
    monkeypatch.setattr(discovery, "_discover_atems_udp", lambda timeout=0.5: [])
    monkeypatch.setattr(discovery, "_udp_probe_host", lambda *a, **k: None)


@pytest.mark.unit
def test_discover_deduplicates_by_ip(monkeypatch, no_network):
    monkeypatch.setattr(discovery, "_discover_atems_mdns", lambda timeout=2.5: [{"ip": "1.1.1.1", "name": "A"}])
    monkeypatch.setattr(
        discovery, "_discover_atems_udp",
        lambda timeout=0.5: [{"ip": "1.1.1.1", "name": "ATEM"}, {"ip": "2.2.2.2", "name": "ATEM"}],
    )
    result = discovery.discover_atems()
    ips = [d["ip"] for d in result]
    assert ips == ["1.1.1.1", "2.2.2.2"]


@pytest.mark.unit
def test_discover_appends_reachable_extra_ip(monkeypatch, no_network):
    monkeypatch.setattr(discovery, "_udp_probe_host", lambda host, *a, **k: host)
    result = discovery.discover_atems(extra_ip="10.0.0.9")
    assert {"ip": "10.0.0.9", "name": "ATEM (последний)"} in result


@pytest.mark.unit
def test_discover_skips_unreachable_extra_ip(monkeypatch, no_network):
    # _udp_probe_host returns None (default stub) -> not added
    assert discovery.discover_atems(extra_ip="10.0.0.9") == []


@pytest.mark.unit
def test_discover_does_not_duplicate_extra_ip_already_found(monkeypatch, no_network):
    monkeypatch.setattr(discovery, "_discover_atems_udp", lambda timeout=0.5: [{"ip": "10.0.0.9", "name": "ATEM"}])
    # probe would succeed, but ip is already in the combined list
    monkeypatch.setattr(discovery, "_udp_probe_host", lambda host, *a, **k: host)
    result = discovery.discover_atems(extra_ip="10.0.0.9")
    assert [d["ip"] for d in result] == ["10.0.0.9"]


@pytest.mark.unit
def test_local_subnet_prefixes_returns_list():
    prefixes = discovery.local_subnet_prefixes()
    assert isinstance(prefixes, list)
