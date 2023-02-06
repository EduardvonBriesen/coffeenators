import styled from "styled-components";
import { getColor } from "../../helpers/getColor";
import Tooltip from "@mui/material/Tooltip";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { dataSelectionActions } from "../../store/data-selection-slice";

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

const Selector = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 0.5vh;

  label {
    font-size: 1.5vh;
  }

  input {
    accent-color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }
`;

function Legend() {
  const dispatcher = useDispatch();

  const { title, unit, extrema, selector, legendFixed } = useSelector(
    (state: RootState) => state.dataSelection
  );
  const { min, max } = extrema;
  const category = selector.name;

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
      <Tooltip
        title={`Fixes the scaling to the maximum value 
        of the respective data set for better differentiability.`}
        placement="bottom"
      >
        <Selector>
          <label htmlFor="legend">Fixed scale</label>
          <input
            checked={legendFixed}
            type="checkbox"
            onChange={(e) =>
              dispatcher(dataSelectionActions.setLegendFixed(e.target.checked))
            }
          />
        </Selector>
      </Tooltip>
    </LegendContainer>
  );
}

export default Legend;
