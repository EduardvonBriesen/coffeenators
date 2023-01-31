import { configureStore } from "@reduxjs/toolkit";
import dataSelectionReducer from "./data-selection-slice";
import quizReducer from "./quiz-slice";

export const store = configureStore({
  reducer: {
    dataSelection: dataSelectionReducer,
    quiz: quizReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
