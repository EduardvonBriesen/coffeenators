import * as d3 from "d3";
import { theme } from "../theme";

export const getColor = (
  value: number,
  min: number,
  max: number,
  category?: string
) => {
  let colorScale = [
    theme.colors.scale.min,
    theme.colors.scale.zero,
    theme.colors.scale.max,
  ];

  console.log(category);

  switch (category) {
    case "Kaffee":
      colorScale = [
        theme.colors.scale.coffee.min,
        theme.colors.scale.coffee.zero,
        theme.colors.scale.coffee.max,
      ];
      break;
    case "Tee":
      colorScale = [
        theme.colors.scale.tea.min,
        theme.colors.scale.tea.zero,
        theme.colors.scale.tea.max,
      ];
      break;
    case "Kakao":
      colorScale = [
        theme.colors.scale.cocoa.min,
        theme.colors.scale.cocoa.zero,
        theme.colors.scale.cocoa.max,
      ];
      break;
  }

  let linearScale;
  if (min < 0 && max > 0) {
    linearScale = d3
      .scaleLinear()
      .domain([min / 2, 0, max / 2])
      .range(colorScale as any);
  } else {
    linearScale = d3
      .scaleLinear()
      .domain([min, max / 2 + min])
      .range([colorScale[1], colorScale[2]] as any);
  }
  return linearScale(value);
};
