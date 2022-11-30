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

  // render map only when map data is fully loaded
  if (!mapData.loading) {
    // step 2: render the regions
    // compute a path function based on correct projections that we will use later
    const path = d3.geoPath().projection(setMapProjection(mapData.data));
    // for each geoJSON coordinate, compute and pass in the equivalent svg path
    const countries = mapData.data.features.map((data: any) => {
      const region_name = regionNamesInGerman.of(data.properties.ISO2);
      const region_data = coffeeData.filter((d) => d.Region === region_name);
      return (
        <Region
          key={data.properties.FID}
          path={path(data) || ""}
          tooltipData={region_name}
          data={region_data}
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
