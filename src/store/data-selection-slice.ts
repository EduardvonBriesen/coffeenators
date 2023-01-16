import { createSlice } from "@reduxjs/toolkit";
import coffeeData from "../data/combined_data.json";
import { selectionConfig } from "../helpers/selectionConfig";
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
  selector: {
    market: string;
    diagram: string;
    name: string;
  };
  year: number;
  title: string;
  unit: string;
  extrema: {
    min: number;
    max: number;
  };
  facts: string[];
}

const initialState = {
  unit: getUnit(selectionConfig[0].selector.market, selectionConfig[0].selector.diagram),
  extrema: getExtrema(
    selectionConfig[0].selector.market,
    selectionConfig[0].selector.diagram,
    selectionConfig[0].selector.name
  ),
  ...selectionConfig[0],
  year: 2017,
} as DataSelectionState;

const { actions, reducer } = createSlice({
  name: "dataSelection",
  initialState,
  reducers: {
    setSelection(state, action) {
      const index = action.payload;
      const config = selectionConfig[index];
      state.selector = config.selector;
      state.title = config.title;
      state.unit = config.unit || getUnit(config.selector.market, config.selector.diagram);
      state.facts = config.facts;
      state.extrema =
        config.extrema ||
        getExtrema(
          config.selector.market,
          config.selector.diagram,
          config.selector.name
        );
    },
    setYear(state, action) {
      state.year = action.payload;
    },
  },
});

export const dataSelectionActions = actions;
export default reducer;
