import * as d3 from "d3";
import { setMapProjection } from "../../helpers/setMapProjection";
import { useMapTools } from "../../hooks/useMapTools";
import Region from "./Region";
import styled from "styled-components";
import coffeeData from "../../data/combined_data.json";

const MapContainer = styled.svg`
  height: 50rem;
  width: 50rem;
`;

export default function Map() {
  // step 1: load geoJSON and create tooltip
  const { mapData } = useMapTools();

  const regionNamesInGerman = new Intl.DisplayNames(["de"], { type: "region" }); // needed cause the data is german

  const dataType = "Durchschnittliches Volumen pro Kopf";
  const dataName = "Kaffee";

  const filteredData = coffeeData.filter(
    (d: any) => d.Diagram === dataType && d.Name === dataName
  );

  const years = [
    2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
    2024, 2025,
  ];

  // find min and max values for the color scale over all years
  const min = d3.min(
    years.map((year) => d3.min(filteredData, (d: any) => d[year]))
  );
  const max =
    d3.max(years.map((year) => d3.max(filteredData, (d: any) => d[year]))) || 1;

  function getFloat(value: string) {
    return parseFloat(value.replace(",", "."));
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
      const region_value = region_values ? region_values["2020"] + "" : "0";

      return (
        <Region
          key={data.properties.ISO2}
          path={path(data) || ""}
          tooltipData={region_name + ", " + region_value}
          value={getFloat(region_value) / getFloat(max) + 0.2}
        />
      );
    });

    return (
      <MapContainer>
        <g>{countries}</g>
      </MapContainer>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
