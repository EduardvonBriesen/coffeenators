import { useState, useEffect } from "react";
import styled from "styled-components";
import { getColor } from "../../helpers/getColor";
import Tooltip from "@mui/material/Tooltip";
import { useSelector, useDispatch } from "react-redux";
import { dataSelectionActions } from "../../store/data-selection-slice";
import { RootState } from "../../store";

const RegionContainer = styled("path")<{ fill: string }>`
  stroke: ${(props) => props.theme.colors.background.main};
  stroke-width: 1px;
  fill: ${(props) => props.fill};
  transition: fill 0.3s ease-in-out;
  z-index: 1;
  &:hover {
    cursor: pointer;
    fill: ${(props) => props.theme.colors.primary};
  }
`;

interface Props {
  path: string;
  country: string;
  tooltipData: string;
  value: number;
  min: number;
  max: number;
}

export default function Region({
  path,
  country,
  tooltipData,
  value,
  min,
  max,
}: Props) {
  //each path defines the shape of a region in the map
  const { unit } = useSelector((state: RootState) => state.dataSelection);
  const dispatcher = useDispatch();

  const [fill, setFill] = useState("white");

  useEffect(() => {
    setFill(String(getColor(value, min, max)));
  }, [value, min, max]);

  return (
    <Tooltip
      title={`${tooltipData} ${unit}`}
      placement="top"
      followCursor
      onClick={(e) => {
        e.stopPropagation();
        dispatcher(dataSelectionActions.setCountry(country));
      }}
    >
      <RegionContainer d={path} fill={fill} />
    </Tooltip>
  );
}
