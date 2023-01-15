import * as d3 from "d3";

export const getColor = (value, min, max) => {
  let linearScale;
  if (min < 0 && max > 0) {
    linearScale = d3
      .scaleLinear()
      .domain([min / 2, 0, max / 2])
      .range(["#1A6079", "#e5e5e5", "#A81F0D"]);
  } else {
    linearScale = d3
      .scaleLinear()
      .domain([0, max / 2])
      .range(["#e5e5e5", "#A81F0D"]);
  }
  return linearScale(value);
};
