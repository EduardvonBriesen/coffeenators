import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { dataSelectionActions } from "../../store/data-selection-slice";

const SlderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  /*********** Baseline, reset styles ***********/
  & input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    cursor: pointer;
    width: 90%;
  }

  /* Removes default focus */
  & input[type="range"]:focus {
    outline: none;
  }

  /******** Chrome, Safari, Opera and Edge Chromium styles ********/
  /* slider track */
  & input[type="range"]::-webkit-slider-runnable-track {
    background-color: #ededed;
    border-radius: 0.5rem;
    height: 0.5rem;
  }

  /* slider thumb */
  & input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    margin-top: -4px; /* Centers thumb on the track */
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 0.5rem;
    height: 1rem;
    width: 1rem;
  }
  /*********** Firefox styles ***********/
  /* slider track */
  & input[type="range"]::-moz-range-track {
    background-color: #ededed;
    border-radius: 0.5rem;
    height: 0.5rem;
  }

  /* slider thumb */
  & input[type="range"]::-moz-range-thumb {
    background-color: ${(props) => props.theme.colors.primary};
    border: none; /*Removes extra border that FF applies*/
    border-radius: 0.5rem;
    height: 1rem;
    width: 1rem;
  }

  & datalist {
    display: flex;
    width: 94%;
    justify-content: space-between;
    padding-top: 0px;
  }
`;

export default function Slider() {
  const dispatcher = useDispatch();
  const { year } = useSelector((state: RootState) => state.dataSelection);

  return (
    <SlderContainer>
      <input
        type="range"
        min="2017"
        max="2022"
        list="steplist"
        value={year}
        onChange={(e) => {
          dispatcher(dataSelectionActions.setYear(e.target.value));
        }}
      />
      <datalist id="steplist">
        <option>2017</option>
        <option>2018</option>
        <option>2019</option>
        <option>2020</option>
        <option>2021</option>
        <option>2022</option>
      </datalist>
    </SlderContainer>
  );
}
