import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./components/map/Map";
import Home from "./pages/Home";
import Layout from "./layout/Layout";

const AppContainer = styled.div`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 42px;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </Layout>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
