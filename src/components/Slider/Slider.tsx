import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { dataSelectionActions } from "../../store/data-selection-slice";
import { Slider as MuiSlider } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";

const muiTheme = createTheme({
  palette: {
    primary: {
      main: theme.colors.primary,
    },
  },
});

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export default function Slider() {
  const dispatcher = useDispatch();
  const { year } = useSelector((state: RootState) => state.dataSelection);

  return (
    <SliderContainer>
      <ThemeProvider theme={muiTheme}>
        <MuiSlider
          value={year}
          onChange={(e, value) => {
            dispatcher(dataSelectionActions.setYear(value as number));
          }}
          min={2017}
          max={2022}
          step={1}
          aria-label="Year"
          marks={
            [
              { value: 2017, label: "2017" },
              { value: 2018, label: "2018" },
              { value: 2019, label: "2019" },
              { value: 2020, label: "2020" },
              { value: 2021, label: "2021" },
              { value: 2022, label: "2022" },
            ] as any
          }
          color="primary"
          sx={{ width: "90%" }}
        />
      </ThemeProvider>
    </SliderContainer>
  );
}
