import { useDispatch } from "react-redux";
import { dataSelectionActions } from "../store/data-selection-slice";
import { selectionConfig } from "../helpers/selectionConfig";
import styled from "styled-components";

const SelectContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: top;
  box-sizing: border-box;
`;

const Select = styled.select`
  width: 100%;
  border: none;
  background-color: ${(props) => props.theme.colors.background.main};
  font-size: 2vh;
  padding: 1vh;
  border-radius: 1vh;
  outline: none;
`;

function DataSelector() {
  const dispatcher = useDispatch();

  return (
    <SelectContainer>
      <Select
        onChange={(e) => {
          dispatcher(dataSelectionActions.setSelection(e.target.value));
        }}
      >
        {selectionConfig.map((selection, index) => (
          <option value={index}>{selection.title}</option>
        ))}
      </Select>
    </SelectContainer>
  );
}

export default DataSelector;
