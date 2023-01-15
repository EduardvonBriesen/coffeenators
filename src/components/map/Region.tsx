import styled from "styled-components";
import {
  handleMouseOver,
  handleMouseOut,
  handleMouseMove,
} from "../../helpers/handleTooltip";
import { getColor } from "../../helpers/getColor";

const RegionContainer = styled.path`
  fill: ${(props) => props.theme.colors.secondary};
  stroke: ${(props) => props.theme.colors.background.main};
  stroke-width: 1px;
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

  const fill = getColor(value, min, max);

  return (
    <RegionContainer
      d={path}
      style={{ fill: fill }}
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
