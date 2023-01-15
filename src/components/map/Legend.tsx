import styled from "styled-components";
import { getColor } from "../../helpers/getColor";

interface Props {
  min: number;
  max: number;
}

const LegendContainer = styled.div`
  position: absolute;
  top: 0;
  right: 1vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const LegendItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 1.5vh;
    padding-right: 0.5vw;
  }

  div {
    width: 4vh;
    height: 2.5vh;
  }
`;

const Unit = styled.span`
  font-size: 1.5vh;
  padding-bottom: 0.5vh;
`;

function Legend({ min, max }: Props) {
  const LegendItem = ({
    value,
    min,
    max,
  }: {
    value: number;
    min: number;
    max: number;
  }) => {
    return (
      <LegendItemContainer>
        <span>{value}</span>
        <div
          style={{
            backgroundColor: getColor(value, min, max) as any,
          }}
        />
      </LegendItemContainer>
    );
  };

  return (
    <LegendContainer>
      <Unit>% of Change in sales</Unit>
      <LegendItem value={max} min={min} max={max} />
      <LegendItem value={max / 2} min={min} max={max} />
      <LegendItem value={0} min={min} max={max} />
      <LegendItem value={min / 2} min={min} max={max} />
      <LegendItem value={min} min={min} max={max} />
    </LegendContainer>
  );
}

export default Legend;
