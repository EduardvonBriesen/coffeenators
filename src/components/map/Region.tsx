import styled from "styled-components";
import {
  handleMouseOver,
  handleMouseOut,
  handleMouseMove,
} from "../../helpers/handleTooltip";

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
  value?: number;
}

export default function Region({ path, tooltipData, value }: Props) {
  //each path defines the shape of a region in the map
  return (
    <RegionContainer
      d={path}
      style={{ opacity: value }}
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
