import styled from 'styled-components';
import Map from '../components/map/Map';
import DataSelection from '../components/DataSelection';
import Slider from "../components/Slider/Slider";

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  background-color: ${(props) => props.theme.colors.background.main};
  width: 100vw;
  height: 100vh;
  padding: 10% ;
  box-sizing: border-box;
`;

function MapPage() {
  return (
    <MapContainer id="map">
      <Map />
      <DataSelection />
      <Slider />
    </MapContainer>
  );
}

export default MapPage;