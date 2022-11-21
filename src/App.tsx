import styled from "styled-components";
import Map from "./components/map/Map";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.background};
`;

function App() {
  return (
    <AppContainer>
      <h1>Map</h1>
      <Map />
    </AppContainer>
  );
}

export default App;
