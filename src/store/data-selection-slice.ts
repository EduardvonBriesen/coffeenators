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

interface DataSelectionState {
  market: string;
  diagram: string;
  name: string;
  year: number;
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
  extrema: getExtrema("Kaffee", "Umsatzveränderung", "Total"),
} as DataSelectionState;

const { actions, reducer } = createSlice({
  name: "dataSelection",
  initialState,
  reducers: {
    setMarket(state, action) {
      state.market = action.payload;
      state.extrema = getExtrema(action.payload, state.diagram, state.name);
    },
    setDiagram(state, action) {
      state.diagram = action.payload;
      state.extrema = getExtrema(state.market, action.payload, state.name);
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
