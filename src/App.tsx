import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./components/map/Map";
import Home from "./pages/Home";
import Layout from "./layout/Layout";

function App() {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </Layout>
      </BrowserRouter>
  );
}

export default App;
