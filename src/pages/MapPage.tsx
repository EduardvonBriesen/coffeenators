import styled from "styled-components";
import Map from "../components/map/Map";
import Slider from "../components/Slider";
import DataSelector from "../components/DataSelector";
import BarChart from "../components/barChart/BarChart";
import Facts from "../components/Stats";

const MapPageContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 65%;
  grid-template-rows: 10% 85%;
  grid-gap: 5%;
  background-color: ${(props) => props.theme.colors.background.main};
  width: 100vw;
  height: 100vh;
  padding: 12vh 10% 5% 10%;
  box-sizing: border-box;
`;

const Headline = styled.h1`
  grid-column: 1;
  grid-row: 1;
  font-weight: 800;
  font-size: 3.5vh;
  line-height: 4vh;
  margin: 0;
`;

const Accent = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 5%;

  grid-column: 1;
  grid-row: 2 / 3;
  background-color: #fffdf9;
  border-radius: 10px;
`;

const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  grid-column: 2 / 3;
  grid-row: 1 / 3;
  background-color: #fffdf9;
  border-radius: 10px;
`;

function MapPage() {
  return (
    <MapPageContainer id="map">
      <Headline>
        Coffee and Corona <br />
        <Accent>Data Visualization</Accent>
      </Headline>
      <InfoContainer>
        <DataSelector />
        <Facts />
        <BarChart />
      </InfoContainer>
      <MapContainer>
        <Map />
        <Slider />
      </MapContainer>
    </MapPageContainer>
  );
}

export default MapPage;
