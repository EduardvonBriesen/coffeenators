import { configureStore } from "@reduxjs/toolkit";
import dataSelectionReducer from "./data-selection-slice";

export const store = configureStore({
  reducer: {
    dataSelection: dataSelectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
