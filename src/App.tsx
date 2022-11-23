import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
import Team from "./pages/Team";
import MapPage from "./pages/MapPage";
import About from "./pages/About";

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
            <Route path="/team" element={<Team />} />
            <Route path="/about" element={<About />} />
            <Route path="/map" element={<MapPage />} />
          </Routes>
        </Layout>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
