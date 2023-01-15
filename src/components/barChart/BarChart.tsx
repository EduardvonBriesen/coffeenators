import { useRef, useEffect, useState } from "react";
import { scaleBand, scaleLinear } from "d3";
import styled from "styled-components";
import { AxisBottom, AxisLeft } from "./Axes";
import Bars from "./Bars";

const BarChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 60%;

  svg {
    background-color: #fff;
  }
`;

function BarChart() {
  const data = [
    { label: "Apples", value: 100 },
    { label: "Bananas", value: 200 },
    { label: "Oranges", value: 50 },
    { label: "Kiwis", value: 150 },
  ];

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const margin = { top: 10, right: 0, bottom: 20, left: 30 };
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeight((ref.current?.clientHeight || 0) - margin.top - margin.bottom);
    setWidth((ref.current?.clientWidth || 0) - margin.left - margin.right);
  }, []);

  const scaleX = scaleBand()
    .domain(data.map(({ label }) => label))
    .range([0, width])
    .padding(0.5);
  const scaleY = scaleLinear()
    .domain([0, Math.max(...data.map(({ value }) => value))])
    .range([height, 0]);

  return (
    <BarChartContainer ref={ref}>
      <svg
        width={width + margin.left + margin.right}
        height={height + margin.top + margin.bottom}
      >
        <g transform={`translate(${margin.left}, ${margin.top})`}>
          <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
          <AxisLeft scale={scaleY} />
          <Bars data={data} height={height} scaleX={scaleX} scaleY={scaleY} />
        </g>
      </svg>
    </BarChartContainer>
  );
}

export default BarChart;
