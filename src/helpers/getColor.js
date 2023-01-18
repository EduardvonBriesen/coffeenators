import * as d3 from "d3";
import { theme } from "../theme";

export const getColor = (value, min, max) => {
  let linearScale;
  if (min < 0 && max > 0) {
    linearScale = d3
      .scaleLinear()
      .domain([min / 2, 0, max / 2])
      .range([
        theme.colors.scale.min,
        theme.colors.scale.zero,
        theme.colors.scale.max,
      ]);
  } else {
    linearScale = d3
      .scaleLinear()
      .domain([0, max / 2])
      .range([theme.colors.scale.zero, theme.colors.scale.max]);
  }
  return linearScale(value);
};
