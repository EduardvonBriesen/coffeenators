import { useState } from "react";
import styled from "styled-components";
import { IQuestion } from "../config/quizConfig";
import {  useDispatch } from "react-redux";
import { quizActions } from "../store/quiz-slice";
import CheckIcon from "@mui/icons-material/Check";

const QuestionContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  padding: 20% 10% 5% 10%;
  box-sizing: border-box;
`;

const QuestionText = styled.h1`
  width: 100%;
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
  flex-wrap: wrap;
`;

const Option = styled("button")<{ selected: boolean }>`
  font-weight: 400;
  font-size: 3vh;
  line-height: 5vh;
  color: ${(props) => props.theme.colors.primary};
  cursor: pointer;

  margin: 0 1vw 1vh 0;
  padding: 1vh 2vh;
  min-width: 6vw;
  border-radius: 4vh;
  background-color: transparent;
  border: 3px solid ${(props) => props.theme.colors.primary};

  :hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background.main};
  }

  ${(props) =>
    props.selected &&
    `
    background-color: ${props.theme.colors.primary};
    color: ${props.theme.colors.background.main};
  `}
`;

const Submit = styled.div`
  position: relative;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: -5vw;
  width: 5vw;
  margin-bottom: 1rem;
  padding: 0 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-size: 3vh;
  line-height: 5vh;
  background-color: transparent;
  color: ${(props) => props.theme.colors.primary};
  border: 3px solid ${(props) => props.theme.colors.primary};

  :hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background.main};
  }

  svg {
    margin-left: 0.5rem;
    font-size: 3vh;
  }
`;

interface QuestionProps {
  id: number;
  question: IQuestion;
  onAnswer: (value: string[]) => void;
}

function Question({ id, question, onAnswer }: QuestionProps) {
  const dispatcher = useDispatch();
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  function toggleOption(option: string) {
    if (!question.isMulti) {
      setSelectedOptions([option]);
      dispatcher(quizActions.answerQuestion({ question, answer: option }));
      return;
    }
    if (selectedOptions.includes(option)) {
      setSelectedOptions((prev) => prev.filter((value) => value !== option));
      return;
    }
    setSelectedOptions((prev) => [...prev, option]);
  }

  return (
    <QuestionContainer id={`question-${id}`}>
      <OptionContainer>
        <QuestionText>{question.question}</QuestionText>
        {question.options.map((option) => (
          <Option
            onClick={() => {
              toggleOption(option.value);
            }}
            selected={selectedOptions.includes(option.value)}
          >
            {option.label}
          </Option>
        ))}
      </OptionContainer>
      {selectedOptions.length > 0 && question.isMulti && (
        <Submit
          onClick={() => {
            onAnswer(selectedOptions);
          }}
        >
          Ok
          <CheckIcon />
        </Submit>
      )}
    </QuestionContainer>
  );
}

export default Question;
