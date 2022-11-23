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
  color: ${(props) => props.theme.colors.dark};
  overflow: hidden;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Team />
                  <About />
                  <MapPage />
                </>
              }
            />
          </Routes>
        </Layout>
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
