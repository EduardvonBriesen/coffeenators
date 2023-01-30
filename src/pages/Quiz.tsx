import styled, { createGlobalStyle } from "styled-components";
import Question from "../components/Question";
import { quizConfig } from "../config/quizConfig"

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const QuizContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background.main};
`;

function Quiz() {
  function scrollIntoView(id: number) {
    const element = document.getElementById(`question-${id}`);
    console.log(element);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  function answerHandler(value: string, id: number) {
    console.log(value);
    scrollIntoView(id + 1);
  }

  return (
    <QuizContainer>
      <GlobalStyle />
      {quizConfig.map((question, index) => (
        <Question
          id={index}
          question={question.question}
          options={question.options}
          onAnswer={(value) => answerHandler(value, index)}
        />
      ))}
    </QuizContainer>
  );
}

export default Quiz;
