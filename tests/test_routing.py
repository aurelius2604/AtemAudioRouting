import pytest

from atem_core.routing import RoutingState


@pytest.mark.unit
def test_set_and_get_route():
    state = RoutingState()
    state.set_route(1, 2, 5)
    assert state.get_route(1, 2) == 5
    assert state.get_route(9, 9) is None


@pytest.mark.unit
def test_set_route_tracks_max_aux_and_source():
    state = RoutingState()
    state.set_route(3, 1, 42)
    assert state.max_aux_seen == 3
    assert state.max_source_seen == 42


@pytest.mark.unit
def test_source_out_of_range_not_counted_as_max():
    state = RoutingState()
    state.set_route(1, 1, 5000)  # > 200 -> not a real source index
    assert state.max_source_seen == 0


@pytest.mark.unit
def test_set_source_name_rewrites_routing_sources():
    state = RoutingState()
    state.routing_sources = {1300: "Input 1 1/2", 1400: "MP1"}
    state.set_source_name(1, "Camera 1")
    assert state.source_names[1] == "Camera 1"
    assert state.routing_sources[1300] == "Camera 1 1/2"
    assert state.routing_sources[1400] == "MP1"  # untouched


@pytest.mark.unit
def test_set_source_name_ignores_none():
    state = RoutingState()
    state.set_source_name(None, "x")
    assert state.source_names == {}


@pytest.mark.unit
def test_load_xml_mapping_applies_once():
    state = RoutingState()
    state.load_xml_mapping({1300: "Cam 1/2"}, {(1, 1): 1300}, aux_count=4)
    assert state.get_route(1, 1) == 1300
    assert state.xml_aux_count == 4
    assert state.xml_routes_loaded is True

    # Second call must not overwrite already-loaded routes
    state.load_xml_mapping({}, {(1, 1): 9999}, aux_count=2)
    assert state.get_route(1, 1) == 1300
