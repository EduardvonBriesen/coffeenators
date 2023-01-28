import { useDispatch } from "react-redux";
import { dataSelectionActions } from "../store/data-selection-slice";
import { selectionConfig } from "../helpers/selectionConfig";
import styled from "styled-components";

const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: top;
  box-sizing: border-box;
`;

const MainSelect = styled.select`
  width: 100%;
  border: none;
  background-color: ${(props) => props.theme.colors.background.main};
  font-size: 2vh;
  padding: 1vh;
  border-radius: 1vh;
  margin: 0 1vh 0 0;
  box-sizing: border-box;
  outline: none;
`;

const SecondSelect = styled.select`
  border: none;
  background-color: ${(props) => props.theme.colors.background.main};
  font-size: 2vh;
  padding: 1vh;
  border-radius: 1vh;
  box-sizing: border-box;
  outline: none;
`;

function DataSelector() {
  const dispatcher = useDispatch();

  return (
    <SelectContainer>
      <MainSelect
        onChange={(e) => {
          dispatcher(dataSelectionActions.setSelection(e.target.value));
        }}
      >
        {selectionConfig.map((selection, index) => (
          <option value={index}>{selection.title}</option>
        ))}
      </MainSelect>
      <SecondSelect>
        <option>Coffee</option>
        <option>Tea</option>
        <option>Kakao</option>
      </SecondSelect>
    </SelectContainer>
  );
}

export default DataSelector;
