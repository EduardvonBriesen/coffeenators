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
  data?: any;
}

export default function Region({ path, tooltipData, data }: Props) {
  const year = 2019;
  const dataType = "Durchschnittliches Volumen pro Kopf";
  const dataName = "Kaffee";

  const dataPoint = data.filter(
    (d: any) => d.Diagram === dataType && d.Name === dataName
  )[0];

  const value = dataPoint ? dataPoint[year] : undefined;

  //each path defines the shape of a region in the map
  return (
    <RegionContainer
      d={path}
      opacity={value ? 1 : 0.5}
      onMouseOver={() => {
        handleMouseOver(value);
      }}
      onMouseOut={handleMouseOut}
      onMouseMove={(event) => {
        handleMouseMove(event);
      }}
    />
  );
}
