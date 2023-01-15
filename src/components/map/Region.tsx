import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  handleMouseOver,
  handleMouseOut,
  handleMouseMove,
} from "../../helpers/handleTooltip";
import { getColor } from "../../helpers/getColor";

const RegionContainer = styled("path")<{ fill: string }>`
  stroke: ${(props) => props.theme.colors.background.main};
  stroke-width: 1px;
  fill: ${(props) => props.fill};
  transition: fill 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    fill: ${(props) => props.theme.colors.primary};
  }
`;

interface Props {
  path: string;
  tooltipData: string;
  value: number;
  min: number;
  max: number;
}

export default function Region({ path, tooltipData, value, min, max }: Props) {
  //each path defines the shape of a region in the map

  const [fill, setFill] = useState("white");

  useEffect(() => {
    setFill(String(getColor(value, min, max)));
  }, [value, min, max]);

  return (
    <RegionContainer
      d={path}
      fill={fill}
      onMouseOver={() => {
        handleMouseOver(tooltipData);
      }}
      onMouseOut={handleMouseOut}
      onMouseMove={(event) => {
        handleMouseMove(event);
      }}
    />
  );
}
