import styled from "styled-components";

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
}

export default function Region({ path, tooltipData }: Props) {
  //each path defines the shape of a region in the map
  return (
    <RegionContainer
      d={path}
      // onMouseOver={() => {
      //   handleMouseOver(tooltipData);
      // }}
      // onMouseOut={handleMouseOut}
      // onMouseMove={(event) => {
      //   handleMouseMove(event);
      // }}
    />
  );
}
