import { createSlice } from "@reduxjs/toolkit";
import coffeeData from "../data/combined_data.json";
import { selectionConfig } from "../config/selectionConfig";
import * as d3 from "d3";
import { translateCountryG2E } from "../helpers/translateCountryG2E";
import { getFloat } from "../helpers/getFloat";

const getExtrema = (market: string, diagram: string, name: string) => {
  const years = [2017, 2018, 2019, 2020, 2021, 2022];

  const filteredData = coffeeData.filter(
    (d: any) =>
      d.Markt === market &&
      d.Diagram === diagram &&
      d.Name === name &&
      d.Region !== "Europa"
  );

  const data = years
    .map((year) => filteredData.map((d: any) => getFloat(String(d[year]))))
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

const getStats = (
  market: string,
  diagram: string,
  name: string,
  year: number
) => {
  const data = coffeeData
    .filter(
      (d: any) =>
        d.Markt === market &&
        d.Diagram === diagram &&
        d.Name === name &&
        d.Region !== "Europa"
    )
    .map((d: any) => {
      return {
        name: translateCountryG2E(d.Region),
        value: getFloat(String(d[year])),
      };
    });

  const topCountry = data.reduce((prev, current) =>
    prev.value > current.value ? prev : current
  );
  const bottomCountry = data.reduce((prev, current) =>
    prev.value < current.value ? prev : current
  );

  const average = d3.mean(data.map((d) => d.value)) || 0;

  return {
    topCountry,
    bottomCountry,
    average,
  };
};

interface DataSelectionState {
  selector: {
    market: string;
    diagram: string;
    name: string;
  };
  categories?: {
    selector: string;
    name: string;
  }[];
  year: number;
  title: string;
  unit: string;
  extrema: {
    min: number;
    max: number;
  };
  stats: {
    topCountry: {
      name: string;
      value: number;
    };
    bottomCountry: {
      name: string;
      value: number;
    };
    average: number;
  };
  currentCountry: string;
  legendFixed: boolean;
  fixedExtrema?: {
    min: number;
    max: number;
  };
  filterSelection: string[];
}

const initialState = {
  unit: getUnit(
    selectionConfig[0].selector.market,
    selectionConfig[0].selector.diagram
  ),
  extrema: getExtrema(
    selectionConfig[0].selector.market,
    selectionConfig[0].selector.diagram,
    selectionConfig[0].selector.name
  ),
  stats: getStats(
    selectionConfig[0].selector.market,
    selectionConfig[0].selector.diagram,
    selectionConfig[0].selector.name,
    2017
  ),
  ...selectionConfig[0],
  year: 2017,
  currentCountry: "Europa",
  legendFixed: true,
  fixedExtrema: selectionConfig[0].extrema,
  filterSelection: [selectionConfig[0].selector.name],
} as unknown as DataSelectionState;

const { actions, reducer } = createSlice({
  name: "dataSelection",
  initialState,
  reducers: {
    setSelection(state, action) {
      const index = action.payload;
      const config = selectionConfig[index];
      if (
        config.categories !== undefined &&
        config.categories.find((d) => d.selector === state.selector.name)
      ) {
        state.selector.market = config.selector.market;
        state.selector.diagram = config.selector.diagram;
      } else {
        state.selector = config.selector;
      }
      state.categories = config.categories;
      state.title = config.title;
      state.unit =
        config.unit || getUnit(config.selector.market, config.selector.diagram);
      state.extrema =
        state.legendFixed && config.extrema
          ? config.extrema
          : getExtrema(
              config.selector.market,
              config.selector.diagram,
              state.selector.name
            );
      state.fixedExtrema = config.extrema;
      state.stats = getStats(
        config.selector.market,
        config.selector.diagram,
        config.selector.name,
        state.year
      ) as unknown as typeof state.stats;
    },
    setCategory(state, action) {
      state.selector.name = action.payload;
      state.extrema = state.legendFixed
        ? state.fixedExtrema || state.extrema
        : getExtrema(
            state.selector.market,
            state.selector.diagram,
            action.payload
          );
      state.stats = getStats(
        state.selector.market,
        state.selector.diagram,
        action.payload,
        state.year
      ) as unknown as typeof state.stats;
      state.filterSelection =
        state.filterSelection.length === 1
          ? [action.payload]
          : state.filterSelection.includes(action.payload)
          ? state.filterSelection
          : [...state.filterSelection, action.payload];
    },
    setYear(state, action) {
      state.year = action.payload;
      state.stats = getStats(
        state.selector.market,
        state.selector.diagram,
        state.selector.name,
        action.payload
      ) as unknown as typeof state.stats;
    },
    setCountry(state, action) {
      state.currentCountry = action.payload;
    },
    setLegendFixed(state, action) {
      state.legendFixed = action.payload;
      state.extrema =
        action.payload && state.extrema
          ? state.fixedExtrema || state.extrema
          : getExtrema(
              state.selector.market,
              state.selector.diagram,
              state.selector.name
            );
    },
    setFilterSelection(state, action) {
      state.filterSelection = action.payload;
    },
  },
});

export const dataSelectionActions = actions;
export default reducer;
