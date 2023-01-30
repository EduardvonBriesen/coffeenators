import { createSlice } from "@reduxjs/toolkit";

interface QuizSliceState {
  currentQuestion: number;
}

const initialState: QuizSliceState = {
  currentQuestion: 0,
};

const { actions, reducer } = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    nextQuestion(state) {
      state.currentQuestion++;
    },
  },
});

export const quizActions = actions;
export default reducer;
