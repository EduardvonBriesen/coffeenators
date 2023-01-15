import { createSlice } from "@reduxjs/toolkit";
import coffeeData from "../data/combined_data.json";
import * as d3 from "d3";

const getExtrema = (market: string, diagram: string, name: string) => {
  const years = [2017, 2018, 2019, 2020, 2021, 2022];

  const filteredData = coffeeData.filter(
    (d: any) => d.Markt === market && d.Diagram === diagram && d.Name === name
  );

  const data = years
    .map((year) =>
      filteredData.map((d: any) =>
        parseFloat(String(d[year]).replace(",", "."))
      )
    )
    .flat();

  const min = d3.min(data) || 0;
  const max = d3.max(data) || 0;

  console.log({ min, max });

  return { min, max };
};

const getUnit = (market: string, diagram: string) => {
  const filteredData = coffeeData.filter(
    (d: any) => d.Markt === market && d.Diagram === diagram
  );
  console.log(filteredData[0].Einheit);
  return filteredData[0].Einheit;
};

interface DataSelectionState {
  market: string;
  diagram: string;
  name: string;
  year: number;
  unit: string;
  extrema: {
    min: number;
    max: number;
  };
}

const initialState = {
  market: "Kaffee",
  diagram: "Umsatzveränderung",
  name: "Total",
  year: 2017,
  unit: getUnit("Kaffee", "Umsatzveränderung"),
  extrema: { min: -40, max: 30 }, //getExtrema("Kaffee", "Umsatzveränderung", "Total"),
} as DataSelectionState;

const { actions, reducer } = createSlice({
  name: "dataSelection",
  initialState,
  reducers: {
    setMarket(state, action) {
      state.market = action.payload;
      state.extrema = getExtrema(action.payload, state.diagram, state.name);
      state.unit = getUnit(action.payload, state.diagram);
    },
    setDiagram(state, action) {
      state.diagram = action.payload;
      state.extrema = getExtrema(state.market, action.payload, state.name);
      state.unit = getUnit(state.market, action.payload);
    },
    setName(state, action) {
      state.name = action.payload;
      state.extrema = getExtrema(state.market, state.diagram, action.payload);
    },
    setYear(state, action) {
      state.year = action.payload;
    },
  },
});

export const dataSelectionActions = actions;
export default reducer;
