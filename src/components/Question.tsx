import styled from "styled-components";

const QuestionContainer = styled.div`
  overflow: hidden;

  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 20% 10% 5% 10%;
  box-sizing: border-box;
`;

const QuestionText = styled.h1`
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

interface QuestionProps {
  id: number;
  question: string;
  options: { value: string; label: string }[];
  onAnswer: (value: string) => void;
}

function Question({ id, question, options, onAnswer }: QuestionProps) {
  return (
    <QuestionContainer id={`question-${id}`}>
      <QuestionText>How much Coffee do you Drink per Day?</QuestionText>
      <OptionContainer>
        {options.map((option) => (
          <Option onClick={() => onAnswer(option.value)}>{option.label}</Option>
        ))}
      </OptionContainer>
    </QuestionContainer>
  );
}

export default Question;
