import { useState, useEffect } from "react";
import styled from "styled-components";
import { getColor } from "../../helpers/getColor";
import Tooltip from "@mui/material/Tooltip";
import { useSelector, useDispatch } from "react-redux";
import { dataSelectionActions } from "../../store/data-selection-slice";
import { RootState } from "../../store";

const RegionContainer = styled("path")<{ fill: string; active: boolean }>`
  stroke: ${(props) => props.theme.colors.background.main};
  stroke-width: 1px;
  fill: ${(props) => props.fill};
  transition: fill 0.3s ease-in-out;
  z-index: 1;
  mask: ${(props) => (props.active ? "url(#mask)" : "none")};
  &:hover {
    cursor: pointer;
    mask: url(#mask);
  }
`;

interface Props {
  path: string;
  country: string;
  tooltipData: string;
  value: number;
}

export default function Region({ path, country, tooltipData, value }: Props) {
  //each path defines the shape of a region in the map
  const { unit, currentCountry, selector, extrema } = useSelector(
    (state: RootState) => state.dataSelection
  );
  const dispatcher = useDispatch();

  const { min, max } = extrema;
  const category = selector.name;

  const [fill, setFill] = useState("white");

  useEffect(() => {
    setFill(String(getColor(value, min, max, category)));
  }, [value, min, max, category]);

  return (
    <>
      <Tooltip
        title={`${tooltipData} ${unit}`}
        placement="top"
        followCursor
        onClick={(e) => {
          e.stopPropagation();
          currentCountry === country
            ? dispatcher(dataSelectionActions.setCountry("Europa"))
            : dispatcher(dataSelectionActions.setCountry(country));
        }}
      >
        <RegionContainer
          d={path}
          fill={fill}
          active={currentCountry === country}
        />
      </Tooltip>
    </>
  );
}
