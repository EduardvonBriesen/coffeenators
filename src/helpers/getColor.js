import * as d3 from "d3";

export const getColor = (value, min, max) => {
  let linearScale = d3
    .scaleLinear()
    .domain([min, 0, max])
    .range(["#1A6079", "#e5e5e5", "#A81F0D"]);

  return linearScale(value);
};
