import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Question from "../components/quiz/Question";
import Results from "../components/quiz/Results";
import { quizConfig } from "../config/quizConfig";

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const QuizContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background.main};
`;

const Navigation = styled.div`
  position: fixed;
  right: 1rem;
  top: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const NavigationItem = styled.div<{ active: string }>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: ${(props) => props.theme.colors.primary};
  opacity: ${(props) => (props.active === "true" ? 1 : 0.5)};
  margin: 0.5rem;
`;

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  function scrollIntoView(id: number) {
    const element = document.getElementById(`question-${id}`);
    element?.scrollIntoView({ behavior: "smooth" });
    setCurrentQuestion(id);
    console.log(id);
  }

  function answerHandler(id: number) {
    if (id === quizConfig.length - 1) {
      showResults();
    } else {
      scrollIntoView(id + 1);
      setCurrentQuestion(id + 1);
    }
  }

  function showResults() {
    const element = document.getElementById(`results`);
    element?.scrollIntoView({ behavior: "smooth" });
    setCurrentQuestion(quizConfig.length);
  }

  return (
    <QuizContainer>
      <GlobalStyle />
      {quizConfig.map((question, index) => (
        <Question
          id={index}
          question={question}
          onAnswer={() => answerHandler(index)}
        />
      ))}
      <Results />
      <Navigation>
        {quizConfig.map((question, index) => (
          <NavigationItem
            onClick={() => scrollIntoView(index)}
            active={currentQuestion === index ? "true" : "false"}
          />
        ))}

        <NavigationItem
          onClick={() => showResults}
          active={currentQuestion === quizConfig.length ? "true" : "false"}
        />
      </Navigation>
    </QuizContainer>
  );
}

export default Quiz;
