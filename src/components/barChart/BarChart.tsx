import { useRef, useEffect, useState } from "react";
import { scaleBand, scaleLinear } from "d3";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import styled from "styled-components";
import { AxisBottom, AxisLeft } from "./Axes";
import Bars from "./Bars";
import Filter from "./Filter";
import coffeeData from "../../data/combined_data.json";
import { translateCountryG2E } from "../../helpers/translateCountryG2E";
import { getFloat } from "../../helpers/getFloat";

const BarChartContainer = styled.div`
  width: 100%;
  height: 40vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2vh;

  p {
    margin: 0;
    text-align: center;
    font-size: 1.5vh;
  }
`;

const SvgContainer = styled("div")<{ zoomed: boolean; zoomable: boolean }>`
  width: 100%;
  height: 100%;
  cursor: ${(props) =>
    props.zoomable ? (props.zoomed ? "zoom-out" : "zoom-in") : "default"};

  svg {
    .tick,
    .domain {
      opacity: 0.5;
      color: #72777b;
    }
  }
`;

function BarChart() {
  const { selector, title, currentCountry, categories, filterSelection } =
    useSelector((state: RootState) => state.dataSelection);
  const { market, diagram, name } = selector;
  const [data, setData] = useState<
    { label: string; values: { category: string; value: number }[] }[]
  >([]);

  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);

  const [zoomed, setZoomed] = useState(false);
  const [zoomable, setZoomable] = useState(false);

  const margin = { top: 20, right: 20, bottom: 20, left: 30 };
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeight((ref.current?.clientHeight || 0) - margin.top - margin.bottom);
    setWidth((ref.current?.clientWidth || 0) - margin.left - margin.right);
  }, [margin.bottom, margin.left, margin.right, margin.top]);

  useEffect(() => {
    const max = Math.max(
      ...data.map(({ values }) => Math.max(...values.map((v) => v.value)))
    );
    const min = Math.min(
      ...data.map(({ values }) => Math.min(...values.map((v) => v.value)))
    );

    setZoomable(min - max / 20 > 0);
  }, [data]);

  useEffect(() => {
    const years = ["2017", "2018", "2019", "2020", "2021", "2022"];
    const filteredData = coffeeData.filter(
      (d: any) =>
        d.Markt === market &&
        d.Diagram === diagram &&
        d.Region === currentCountry
    ) as any;

    const categoryData =
      categories !== undefined
        ? categories
            .filter((c) => filterSelection.includes(c.selector))
            .map((c) => filteredData.filter((d: any) => d.Name === c.selector))
        : [filteredData[0]];

    const data = years.map((year: string) => {
      return {
        label: year,
        values: categoryData.flat().map((d: any) => {
          return {
            category: d.Name,
            value: getFloat(String(d[year])),
          };
        }),
      };
    });
    setData(data);
  }, [market, diagram, name, currentCountry, categories, filterSelection]);

  const scaleX = scaleBand()
    .domain(data.map(({ label }) => label))
    .range([0, width])
    .padding(0.5);
  const scaleY = scaleLinear()
    .domain([
      Math.min(
        ...data.map(({ values }) => Math.min(...values.map((v) => v.value)))
      ) < 0 || zoomed
        ? Math.min(
            ...data.map(({ values }) => Math.min(...values.map((v) => v.value)))
          )
        : 0,
      Math.max(
        ...data.map(({ values }) => Math.max(...values.map((v) => v.value)))
      ),
    ])
    .range([height, 0])
    .nice();

  console.log(zoomed, zoomable);

  return (
    <BarChartContainer>
      <p>
        {title} in {translateCountryG2E(currentCountry)}
      </p>
      <SvgContainer
        ref={ref}
        onClick={() => {
          zoomable && setZoomed(!zoomed);
        }}
        zoomed={zoomed}
        zoomable={zoomable}
      >
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
      <Filter />
    </BarChartContainer>
  );
}

export default BarChart;
