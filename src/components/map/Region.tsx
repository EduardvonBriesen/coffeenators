import {
  handleMouseOver,
  handleMouseOut,
  handleMouseMove,
} from "../../helpers/handleTooltip";
import "./Region.css";
import styled from "styled-components";

const RegionContainer = styled.path`
  fill: rgb(132, 0, 255);
  stroke: cornsilk;
  stroke-width: 1px;
  &:hover {
    cursor: pointer;
    fill: rgb(255, 145, 0);
    fill-opacity: 0.5;
  }
`;

interface Props {
  path: string;
  tooltipData: string;
}

export default function Region({ path, tooltipData }: Props) {
  //each path defines the shape of a region in the map
  return (
    <RegionContainer
      d={path}
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
