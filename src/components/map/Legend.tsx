import React, { useEffect, useState} from 'react';
import * as d3 from 'd3';
import coffeeData from "../../data/combined_data.json";
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

const Legend: React.FC = () => {

  const { market, diagram, name, year } = useSelector(
    (state: RootState) => state.dataSelection
  );

  const [maxValue, setMaxValue] = useState<number>(-Infinity);

  useEffect(() => {
    const filteredData = coffeeData.filter(
      (d: any) => d.Markt === market && d.Diagram === diagram && d.Name === name
    );

    var allValues: any[] = [];
    if (typeof (year) != 'undefined') {
      filteredData.forEach(d => {
        allValues.push(d[year.toString() as keyof typeof d]);
      });
    }
    allValues = allValues.map(v => getFloat(v));
    const maxValue = Math.max(...allValues);
    setMaxValue(maxValue);

  }, [market, diagram, name, year]);

  function getFloat(value: string | number) {
    if (typeof value === "string") {
      return parseFloat(value.replace(",", "."));
    }
    return value;
  }

  useEffect(() => {
    changeLegend(maxValue);
  }, [maxValue])


  const changeLegend = (maxValue: number) => {

    var colors = [];
    for (var i = 0.2; i <= 1; i += 0.1) {
      colors.push(i);
    }
    colors = colors.map(c => "rgba(148, 114, 74, " + c + ")");
    
    const values = [];
    for (i = 0; i < maxValue * 1.2; i += (maxValue-0) / (colors.length-1)) {
      values.push(i);
    }
    

    const data = [];
    for (var j = 0; j < colors.length; j++) {
      data.push({
        "color": colors[j],
        "value": values[j]
      });
    }

    var extent = [0, maxValue];
    console.log(extent);

    var padding = 9;
    var width = 320;
    var innerWidth = width - (padding * 2);
    var barHeight = 8;
    var height = 28;
    var xScale = d3.scaleLinear()
      .range([0, innerWidth])
      .domain(extent as Iterable<number>);

    var xTicks = [data[0].value, data[data.length - 1].value]

    var xAxis = d3.axisBottom(xScale)
      .tickSize(barHeight * 2)
      .tickValues(xTicks);

    var svg = d3.select('.legend').attr("width", width).attr("height", height);
    svg.selectAll("*").remove();

    var g = svg.append("g").attr("transform", "translate(" + padding + ", 0)");

    var defs = svg.append("defs");
    var linearGradient = defs.append("linearGradient").attr("id", "myGradient");

    if (maxValue !== -Infinity) {
    linearGradient.selectAll("stop")
      .data(data)
      .enter().append("stop")
      .attr("offset", d => ((d.value - (extent[0])) / ((extent[1]) - (extent[0])) * 100) + "%")
      .attr("stop-color", d => d.color);

      g.append("g")
        .call(xAxis)
        .select(".domain").remove();
    }else{
      linearGradient.selectAll("stop")
      .data(data)
      .enter().append("stop")
      .attr("offset", 100+"%")
      .attr("stop-color", d => d.color);
    }

    g.append("rect")
      .attr("width", innerWidth)
      .attr("height", barHeight)
      .style("fill", "url(#myGradient)");

  }

  return (
    <div>
      <svg className="legend" />
    </div>

  );
}

export default Legend;