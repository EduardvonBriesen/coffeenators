import {
  handleMouseOver,
  handleMouseOut,
  handleMouseMove,
} from "../../helpers/handleTooltip";
import "./Region.css";

interface Props {
  path: string;
  tooltipData: string;
}

export default function Region({ path, tooltipData }: Props) {
  //each path defines the shape of a region in the map
  return (
    <path
      className="path"
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
