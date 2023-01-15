import styled from "styled-components";
import { getColor } from "../../helpers/getColor";
import { useSelector } from "react-redux";
import { RootState } from "../../store"; 

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

  const title = useSelector((state: RootState) => state.dataSelection.title);

  const positiveLegend = [
    <LegendItem value={max} min={min} max={max} />,
    <LegendItem value={max * 0.75} min={min} max={max} />,
    <LegendItem value={max * 0.5} min={min} max={max} />,
    <LegendItem value={max * 0.25} min={min} max={max} />,
    <LegendItem value={0} min={min} max={max} />,
  ];

  const negativeLegend = [
    <LegendItem value={max} min={min} max={max} />,
    <LegendItem value={max / 2} min={min} max={max} />,
    <LegendItem value={0} min={min} max={max} />,
    <LegendItem value={min / 2} min={min} max={max} />,
    <LegendItem value={min} min={min} max={max} />,
  ];

  return (
    <LegendContainer>
      <Unit>{title}</Unit>
      {min >= 0 ? positiveLegend : negativeLegend}
    </LegendContainer>
  );
}

export default Legend;
