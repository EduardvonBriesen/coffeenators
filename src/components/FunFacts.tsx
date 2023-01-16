import { useSelector } from "react-redux";
import { RootState } from "../store";
import styled from "styled-components";

const FactContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1vh 0;

  p {
    font-size: 2vh;
    margin: 1vh 0;

    b {
      font-weight: 600;
    }
  }
`;

function FunFacts() {
  const { facts } = useSelector((state: RootState) => state.dataSelection);

  return (
    <FactContainer>
      {facts && facts.map((fact) => (
        <p dangerouslySetInnerHTML={{ __html: fact }} />
      ))}
    </FactContainer>
  );
}

export default FunFacts;
