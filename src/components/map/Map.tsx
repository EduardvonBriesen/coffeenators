import * as d3 from "d3";
import { useState, useEffect } from "react";
import { setMapProjection } from "../../helpers/setMapProjection";
import { useMapTools } from "../../hooks/useMapTools";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Region from "./Region";
import coffeeData from "../../data/combined_data.json";
import styled from "styled-components";

const MapContainer = styled.div`
  width: 100%;
  height: 80%;
  position: relative;
`;

export default function Map() {
  const { mapData } = useMapTools();
  const { market, diagram, name, year } = useSelector(
    (state: RootState) => state.dataSelection
  );

  console.log(market, diagram, name, year);

  const [extrema, setExtrema] = useState({ min: 0, max: 0 });
  const [filteredData, setFilteredData] = useState<any[]>([]);

  const regionNamesInGerman = new Intl.DisplayNames(["de"], { type: "region" }); // needed cause the data is german

  useEffect(() => {
    const years = [2017, 2018, 2019, 2020, 2021, 2022];

    const filteredData = coffeeData.filter(
      (d: any) => d.Markt === market && d.Diagram === diagram && d.Name === name
    );
    setFilteredData(filteredData);

    // find min and max values for the color scale over all years
    const min = d3.min(
      years.map((year) => d3.min(filteredData, (d: any) => d[year]))
    );
    const max =
      d3.max(years.map((year) => d3.max(filteredData, (d: any) => d[year]))) ||
      "1";

    setExtrema({ min, max });
  }, [market, diagram, name]);

  function getFloat(value: string | number) {
    if (typeof value === "string") {
      return parseFloat(value.replace(",", "."));
    }
    return value;
  }

  // render map only when map data is fully loaded
  if (!mapData.loading) {
    // step 2: render the regions
    // compute a path function based on correct projections that we will use later
    const path = d3.geoPath().projection(setMapProjection(mapData.data));
    // for each geoJSON coordinate, compute and pass in the equivalent svg path
    const countries = mapData.data.features.map((data: any) => {
      const region_name = regionNamesInGerman.of(data.properties.ISO2) || "";
      const region_values = filteredData.find((d) => d.Region === region_name);
      const region_value = region_values ? region_values[year + ""] + "" : "0";

      return (
        <Region
          key={data.properties.ISO2}
          path={path(data) || ""}
          tooltipData={region_name + ", " + region_value}
          value={getFloat(region_value) / getFloat(extrema.max) + 0.2}
        />
      );
    });

    return (
      <MapContainer>
        <svg viewBox="130 -20 700 600">{countries}</svg>
      </MapContainer>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
