import { useState, useEffect } from "react";
import coffeeData from "../../data/combined_data.json";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { dataSelectionActions } from "../../store/data-selection-slice";

function Slider() {
  const dispatcher = useDispatch();
  const { market, diagram, name } = useSelector(
    (state: RootState) => state.dataSelection
  );

  const [markets, setMarkets] = useState<string[]>([]);
  const [diagrams, setDiagrams] = useState<string[]>([]);
  const [names, setNames] = useState<string[]>([]);
  const [unit, setUnit] = useState<string>();
  const years = [
    2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
    2024, 2025,
  ];

  function getMarkets() {
    const markets = coffeeData.map((data) => data["Markt"]);
    return [...new Set(markets)];
  }

  function getDiagram(market: string) {
    const data = coffeeData.filter((data) => data["Markt"] === market);
    const diagram = data.map((data) => data["Diagram"]);
    return [...new Set(diagram)];
  }

  function getNames(market: string, diagram: string) {
    const data = coffeeData.filter(
      (data) => data["Markt"] === market && data["Diagram"] === diagram
    );
    const name = data.map((data) => data["Name"]);
    return [...new Set(name)];
  }

  function getUnit(market: string, diagram: string, name: string) {
    const data = coffeeData.find(
      (data) =>
        data["Markt"] === market &&
        data["Diagram"] === diagram &&
        data["Name"] === name
    );
    return data?.Einheit;
  }

  useEffect(() => {
    setMarkets(getMarkets());
  }, []);

  useEffect(() => {
    market && setDiagrams(getDiagram(market));
  }, [market]);

  useEffect(() => {
    market && diagram && setNames(getNames(market, diagram));
  }, [market, diagram]);

  useEffect(() => {
    market && diagram && name && setUnit(getUnit(market, diagram, name));
  }, [market, diagram, name]);

  return (
    <>
      <div id="slider">
        <p>Slider under construction</p>
      </div>
    </>
  );
}

export default Slider;
