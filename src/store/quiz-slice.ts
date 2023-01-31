import { createSlice } from "@reduxjs/toolkit";

interface QuizSliceState {
  answers: { [key: string]: string | string[] };
}

const initialState: QuizSliceState = {
  answers: {},
};

const { actions, reducer } = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    answerQuestion(state, action) {
      state.answers[action.payload.question] = action.payload.answer;
      console.log(state.answers);
    }
  },
});

export const quizActions = actions;
export default reducer;
