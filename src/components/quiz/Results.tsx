import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

const ResultsContainer = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  padding: 20% 10% 5% 10%;
  box-sizing: border-box;
`;

function Results() {
  const { answers } = useSelector((state: RootState) => state.quiz);

  return (
    <ResultsContainer id="results">
      <h1>Results</h1>
      <div>
        {answers.map((answer, index) => (
          <div key={index}>
            <b>{answer.question}</b>{" "}
            <p>
              {answer.answer.length > 1
                ? answer.answer.map((a) => a + ", ")
                : answer.answer}
            </p>
          </div>
        ))}
      </div>
    </ResultsContainer>
  );
}

export default Results;
