import { useSelector } from "react-redux";
import { RootState } from "../store";
import styled from "styled-components";

const FactContainer = styled.div`
  width: 90%;
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
        🚀 The highest {title.toLowerCase()} has <b>{topCountry.name}</b> with a value of{" "}
        <b>
          {topCountry.value.toFixed(2)}
          {unit}
        </b>
        .
      </p>
      <p>
        📉 The lowest {title.toLowerCase()} has <b>{bottomCountry.name}</b> with a value of{" "}
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