import * as d3 from "d3";
import { useState, useEffect } from "react";
import { setMapProjection } from "../../helpers/setMapProjection";
import { useMapTools } from "../../hooks/useMapTools";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import Region from "./Region";
import Legend from "./Legend";
import { dataSelectionActions } from "../../store/data-selection-slice";
import coffeeData from "../../data/combined_data.json";
import styled from "styled-components";
import { getFloat } from "../../helpers/getFloat";
import { translateCountryG2E } from "../../helpers/translateCountryG2E";
import CloseIcon from "@mui/icons-material/Close";
import InfoButton from "../Info";

const MapContainer = styled.div`
  width: 100%;
  height: 85%;
  position: relative;
`;

const Chip = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 0;
  left: 1rem;
  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.background.main};
  padding: 0.5rem;
  border-radius: 0.5rem;
  font-size: 1rem;
  z-index: 100;

  svg {
    margin-left: 0.5rem;
    color: black;
    cursor: pointer;

    &:hover {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;

export default function Map() {
  const dispatcher = useDispatch();
  const { mapData } = useMapTools();
  const { selector, year, currentCountry } = useSelector(
    (state: RootState) => state.dataSelection
  );
  const { market, diagram, name } = selector;

  const [filteredData, setFilteredData] = useState<any[]>([]);

  const regionNamesInGerman = new Intl.DisplayNames(["de"], { type: "region" }); // needed cause the data is german
  const regionNamesInEnglish = new Intl.DisplayNames(["en"], {
    type: "region",
  });

  useEffect(() => {
    const filteredData = coffeeData.filter(
      (d: any) => d.Markt === market && d.Diagram === diagram && d.Name === name
    );
    setFilteredData(filteredData);
  }, [market, diagram, name]);

  // render map only when map data is fully loaded
  if (!mapData.loading) {
    // step 2: render the regions
    // compute a path function based on correct projections that we will use later
    const path = d3.geoPath().projection(setMapProjection(mapData.data));
    // for each geoJSON coordinate, compute and pass in the equivalent svg path
    const countries = mapData.data.features.map((data: any) => {
      const region_name = regionNamesInGerman.of(data.properties.ISO2) || "";
      const region_name_en =
        regionNamesInEnglish.of(data.properties.ISO2) || "";
      const region_values = filteredData.find((d) => d.Region === region_name);
      if (!region_values) return null;
      const region_value = region_values[year + ""] + "";

      return (
        <Region
          key={data.properties.ISO2}
          path={path(data) || ""}
          country={region_name}
          tooltipData={region_name_en + ", " + region_value}
          value={getFloat(region_value)}
        />
      );
    });

    return (
      <MapContainer
        onClick={() => {
          dispatcher(dataSelectionActions.setCountry("Europa"));
        }}
      >
        <InfoButton />
        {currentCountry !== "Europa" && (
          <Chip>
            <label htmlFor="chip">{translateCountryG2E(currentCountry)}</label>
            <CloseIcon
              id="chip"
              fontSize="small"
              onClick={() => {
                dispatcher(dataSelectionActions.setCountry("Europa"));
              }}
            />
          </Chip>
        )}
        <Legend />
        <svg viewBox="130 -20 700 600">
          <defs>
            <pattern
              id="stripe"
              width="5"
              height="10"
              patternUnits="userSpaceOnUse"
              patternTransform="rotate(45)"
            >
              <rect width="4" height="10" fill="white" />
            </pattern>
            <mask id="mask">
              <rect
                height="1000"
                width="1000"
                style={{
                  fill: "url(#stripe)",
                }}
              />
            </mask>
          </defs>
          {countries}
        </svg>
      </MapContainer>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}
