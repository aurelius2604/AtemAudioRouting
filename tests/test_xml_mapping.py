import xml.etree.ElementTree as ET

import pytest

from atem_core.routing import RoutingState
from atem_core.xml_mapping import export_xml_with_routing, load_xml_audio_mapping

SAMPLE_XML = """<?xml version="1.0" encoding="UTF-8"?>
<DeviceProfile>
  <Settings>
    <Inputs>
      <Input id="1" longName="Camera 1" shortName="Cam1"/>
      <Input id="2" shortName="Cam2"/>
    </Inputs>
  </Settings>
  <Profile>
    <AudioMapping>
      <AudioSources>
        <Source id="1300" name="Input 1 1/2"/>
        <Source id="1400" name="MP1"/>
      </AudioSources>
      <AudioOutputs>
        <Output name="Aux1 1/2" sourceId="1300"/>
        <Output name="Aux2 3/4" sourceId="1400"/>
        <Output name="Program 1/2" sourceId="9000"/>
      </AudioOutputs>
    </AudioMapping>
  </Profile>
</DeviceProfile>
"""


@pytest.fixture
def xml_dir(tmp_path):
    (tmp_path / "profile.xml").write_text(SAMPLE_XML)
    return tmp_path


@pytest.mark.unit
def test_load_returns_none_when_no_xml(tmp_path):
    assert load_xml_audio_mapping(str(tmp_path)) is None


@pytest.mark.unit
def test_load_parses_input_labels(xml_dir):
    mapping = load_xml_audio_mapping(str(xml_dir))
    assert mapping["input_labels"] == {1: "Camera 1", 2: "Cam2"}


@pytest.mark.unit
def test_load_pretty_sources(xml_dir):
    mapping = load_xml_audio_mapping(str(xml_dir))
    # "Input 1 1/2" -> resolved via input label "Camera 1"
    assert mapping["audio_sources"][1300] == "Camera 1 1/2"
    assert mapping["audio_sources"][1400] == "MP1"


@pytest.mark.unit
def test_load_audio_outputs_and_aux_count(xml_dir):
    mapping = load_xml_audio_mapping(str(xml_dir))
    assert mapping["audio_outputs"] == {(1, 1): 1300, (2, 2): 1400}
    assert mapping["aux_count"] == 2  # "Program ..." is ignored (not AuxN)


@pytest.mark.unit
def test_export_updates_sourceid(xml_dir):
    xml_path = str(xml_dir / "profile.xml")
    state = RoutingState()
    state.set_route(1, 1, 7777)  # re-route Aux1 1/2

    out_path = export_xml_with_routing(xml_path, state)
    assert out_path is not None
    assert out_path.endswith("__audio_routed.xml")

    root = ET.parse(out_path).getroot()
    outputs = {o.get("name"): o.get("sourceId") for o in root.findall(".//AudioOutputs/Output")}
    assert outputs["Aux1 1/2"] == "7777"
    assert outputs["Aux2 3/4"] == "1400"  # unchanged


@pytest.mark.unit
def test_export_returns_none_when_no_routes_match(xml_dir):
    xml_path = str(xml_dir / "profile.xml")
    state = RoutingState()  # no routes set
    assert export_xml_with_routing(xml_path, state) is None
