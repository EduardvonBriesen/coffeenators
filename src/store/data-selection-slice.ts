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

  const min = Math.floor(d3.min(data) || 0);
  const max = Math.ceil(d3.max(data) || 0);

  return { min, max };
};

const getUnit = (market: string, diagram: string) => {
  const filteredData = coffeeData.filter(
    (d: any) => d.Markt === market && d.Diagram === diagram
  );
  return filteredData[0].Einheit;
};

interface DataSelectionState {
  market: string;
  diagram: string;
  name: string;
  year: number;
  title: string;
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
  title: `Umsatzveränderung in ${getUnit("Kaffee", "Umsatzveränderung")}`,
  extrema: getExtrema("Kaffee", "Umsatzveränderung", "Total"),
} as DataSelectionState;

const { actions, reducer } = createSlice({
  name: "dataSelection",
  initialState,
  reducers: {
    setSelection(state, action) {
      const { market, diagram, name } = action.payload;
      state.market = market;
      state.diagram = diagram;
      state.name = name;
      state.title = `${diagram} in ${getUnit(market, diagram)}`;
      state.extrema = getExtrema(market, diagram, name);
    },
    setYear(state, action) {
      state.year = action.payload;
    },
  },
});

export const dataSelectionActions = actions;
export default reducer;
