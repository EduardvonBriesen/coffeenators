import { useRef, useEffect, useState } from "react";
import { scaleBand, scaleLinear } from "d3";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styled from "styled-components";
import { AxisBottom, AxisLeft } from "./Axes";
import Bars from "./Bars";
import coffeeData from "../../data/combined_data.json";
import { translateCountryG2E } from "../../helpers/translateCountryG2E";

const BarChartContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2vh;
`;

const SvgContainer = styled.div`
  width: 100%;
  height: 100%;

  svg {
    .tick,
    .domain {
      opacity: 0.5;
      color: #72777b;
    }
  }
`;

function BarChart() {
  const { selector, title, country } = useSelector(
    (state: RootState) => state.dataSelection
  );
  const { market, diagram, name } = selector;
  const [data, setData] = useState<any[]>([]);

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const margin = { top: 20, right: 20, bottom: 20, left: 20 };
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeight((ref.current?.clientHeight || 0) - margin.top - margin.bottom);
    setWidth((ref.current?.clientWidth || 0) - margin.left - margin.right);
  }, [margin.bottom, margin.left, margin.right, margin.top]);

  useEffect(() => {
    const years = ["2017", "2018", "2019", "2020", "2021", "2022"];
    const filteredData = coffeeData.filter(
      (d: any) =>
        d.Markt === market &&
        d.Diagram === diagram &&
        d.Name === name &&
        d.Region === country
    )[0] as any;

    const data = years.map((year: string) => {
      return {
        label: year,
        value: parseFloat(String(filteredData[year]).replace(",", ".")),
      };
    });
    setData(data);
  }, [market, diagram, name, country]);

  const scaleX = scaleBand()
    .domain(data.map(({ label }) => label))
    .range([0, width])
    .padding(0.5);
  const scaleY = scaleLinear()
    .domain([
      Math.min(...data.map(({ value }) => value)) < 0
        ? Math.min(...data.map(({ value }) => value))
        : 0,
      Math.max(...data.map(({ value }) => value)),
    ])
    .range([height, 0])
    .nice();

  return (
    <BarChartContainer>
      <SvgContainer ref={ref}>
        <svg
          width={width + margin.left + margin.right}
          height={height + margin.top + margin.bottom}
        >
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            <AxisBottom scale={scaleX} transform={`translate(0, ${height})`} />
            <AxisLeft scale={scaleY} width={width} />
            <Bars data={data} height={height} scaleX={scaleX} scaleY={scaleY} />
          </g>
        </svg>
      </SvgContainer>
      {title} in {translateCountryG2E(country)}
    </BarChartContainer>
  );
}

export default BarChart;
