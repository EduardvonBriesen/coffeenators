import * as d3 from "d3";
import { setMapProjection } from "../../helpers/setMapProjection";
import { useMapTools } from "../../hooks/useMapTools";
import Region from "./Region";
import "./Map.css";

export default function Map() {
  // step 1: load geoJSON and create tooltip
  const { mapData } = useMapTools();

  // render map only when map data is fully loaded
  if (!mapData.loading) {
    // step 2: render the regions
    // compute a path function based on correct projections that we will use later
    const path = d3.geoPath().projection(setMapProjection(mapData.data));
    // for each geoJSON coordinate, compute and pass in the equivalent svg path
    const countries = mapData.data.features.map((data: any) => {
      const region_name = data.properties["NAME_ENG"];
      return (
        <Region
          key={data.properties.FID}
          path={path(data) || ""}
          tooltipData={region_name}
        />
      );
    });

    return (
      <>
        <svg className="map-canvas">
          <g className="map">{countries}</g>
        </svg>
      </>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
