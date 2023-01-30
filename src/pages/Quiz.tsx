import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

const QuizContainer = styled.div`
  background-color: ${(props) => props.theme.colors.background.main};
`;

const QuestionContainer = styled.div`
  overflow: hidden;

  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 20% 10% 5% 10%;
  box-sizing: border-box;
`;

const Question = styled.h1`
  font-weight: 400;
  font-size: 5vh;
  line-height: 8vh;
  margin: 0;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  padding-top: 1rem;
`;

const Option = styled.button`
  font-weight: 400;
  font-size: 3vh;
  line-height: 5vh;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;

  margin: 0 1vw 0 0;
  padding: 1vh 2vh;
  min-width: 5vw;
  border-radius: 4vh;
  background-color: transparent;
  border: 3px solid ${(props) => props.theme.colors.primary};

  :hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background.main};
  }
`;

function Quiz() {
  function scrollIntoView(id: number) {
    const element = document.getElementById(`question-${id}`);
    console.log(element);
    element?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <QuizContainer>
      <GlobalStyle />
      <QuestionContainer id="question-1">
        <Question>How much Coffee do you Drink per Day?</Question>
        <OptionContainer>
          <Option onClick={() => scrollIntoView(2)}>I don't</Option>
          <Option>1 Cup</Option>
          <Option>2 Cups</Option>
          <Option>3 Cups</Option>
          <Option>4 Cups</Option>
          <Option>5 or more Cups</Option>
        </OptionContainer>
      </QuestionContainer>

      <QuestionContainer id="question-2">
        <Question>How much Coffee do you Drink per Day?</Question>
        <OptionContainer>
          <Option>I don't</Option>
          <Option>1 Cup</Option>
          <Option>2 Cups</Option>
          <Option>3 Cups</Option>
          <Option>4 Cups</Option>
          <Option>5 or more Cups</Option>
        </OptionContainer>
      </QuestionContainer>
    </QuizContainer>
  );
}

export default Quiz;
