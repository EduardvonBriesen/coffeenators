import styled from "styled-components";
import { getColor } from "../../helpers/getColor";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

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
    transition: backgroundColor 0.3s ease-in-out;
  }
`;

const Unit = styled.span`
  padding-bottom: 0.5vh;
`;

function Legend() {
  const LegendItem = ({ value }: { value: number }) => {
    return (
      <LegendItemContainer>
        <span>{value}</span>
        <div
          style={{
            backgroundColor: getColor(value, min, max, category) as any,
          }}
        />
      </LegendItemContainer>
    );
  };

  const { title, unit, extrema, selector } = useSelector(
    (state: RootState) => state.dataSelection
  );
  const { min, max } = extrema;
  const category = selector.name;

  const positiveLegend = [
    <LegendItem value={max} />,
    <LegendItem value={(max - min) * 0.75 + min} />,
    <LegendItem value={(max - min) * 0.5 + min} />,
    <LegendItem value={(max - min) * 0.25 + min} />,
    <LegendItem value={min} />,
  ];

  const negativeLegend = [
    <LegendItem value={max} />,
    <LegendItem value={max / 2} />,
    <LegendItem value={0} />,
    <LegendItem value={min / 2} />,
    <LegendItem value={min} />,
  ];

  return (
    <LegendContainer>
      <Unit>
        {title} in {unit}
      </Unit>
      {min >= 0 ? positiveLegend : negativeLegend}
    </LegendContainer>
  );
}

export default Legend;
