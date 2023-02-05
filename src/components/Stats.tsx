import { useSelector } from "react-redux";
import { RootState } from "../store";
import styled from "styled-components";

const FactContainer = styled.div`
  width: 100%;
  height: 32vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2vh 0;
  box-sizing: border-box;

  p {
    font-size: 2vh;
    margin: 0.5vh 0;

    h1 {
      font-size: 3vh;
      display: inline;
    }

    b {
      font-weight: 600;
    }
  }
`;

function Facts() {
  const { unit, stats, title, year } = useSelector(
    (state: RootState) => state.dataSelection
  );
  const { topCountry, bottomCountry, average } = stats;

  return (
    <FactContainer>
      <p>
        In the Year <b>{year}</b>,
      </p>
      <p>
        🚀 On top is <b>{topCountry.name}</b> with a value of{" "}
        <b>
          {topCountry.value.toFixed(2)}
          {unit}
        </b>
        .
      </p>
      <p>
        📉 <b>{bottomCountry.name}</b> has the lowest value with{" "}
        <b>
          {bottomCountry.value.toFixed(2)}
          {unit}
        </b>
        .
      </p>
      <p>
        ⚖️ The average value for {title.toLowerCase()} in <b>Europe</b> is{"  "}
        <b>
          {average.toFixed(2)}
          {unit}
        </b>
        .
      </p>
    </FactContainer>
  );
}

export default Facts;
