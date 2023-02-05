import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
import { dataSelectionActions } from "../store/data-selection-slice";
import { selectionConfig } from "../config/selectionConfig";
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
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
`;

const SecondSelect = styled.select`
  border: none;
  background-color: ${(props) => props.theme.colors.background.main};
  font-size: 2vh;
  padding: 1vh;
  border-radius: 1vh;
  margin: 0 0 0 1vh;
  box-sizing: border-box;
  outline: none;
  cursor: pointer;
`;

function DataSelector() {
  const dispatcher = useDispatch();
  const { categories } = useSelector((state: RootState) => state.dataSelection);

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
      {categories && (
        <SecondSelect
          onChange={(e) => {
            dispatcher(dataSelectionActions.setCategory(e.target.value));
          }}
        >
          {categories.map((category) => (
            <option value={category.selector}>{category.name}</option>
          ))}
        </SecondSelect>
      )}
    </SelectContainer>
  );
}

export default DataSelector;
