import { createSlice } from "@reduxjs/toolkit";

interface QuizSliceState {
  answers: {
    question: string;
    answer: string[];
  }[];
}

const initialState: QuizSliceState = {
  answers: [],
};

const { actions, reducer } = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerQuestion(state, action) {
      const { question, answer } = action.payload;
      if (state.answers.some((a) => a.question === question)) {
        state.answers = state.answers.map((a) =>
          a.question === question ? { question, answer } : a
        );
      } else {
        state.answers.push({ question, answer });
      }
    },
  },
});

export const quizActions = actions;
export default reducer;
