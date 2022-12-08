import { createSlice } from "@reduxjs/toolkit";

interface DataSelectionState {
  market: string | undefined;
  diagram: string | undefined;
  name: string | undefined;
  year: number | undefined;
}

const initialState = {
  market: undefined,
  diagram: undefined,
  name: undefined,
} as DataSelectionState;

const { actions, reducer } = createSlice({
  name: "dataSelection",
  initialState,
  reducers: {
    setMarket(state, action) {
      state.market = action.payload;
    },
    setDiagram(state, action) {
      state.diagram = action.payload;
    },
    setName(state, action) {
      state.name = action.payload;
    },
    setYear(state, action) {
      state.year = action.payload;
    }
  },
});

export const dataSelectionActions = actions;
export default reducer;
