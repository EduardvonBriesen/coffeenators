import { useDispatch } from "react-redux";
import { dataSelectionActions } from "../store/data-selection-slice";
import styled from "styled-components";

const changeOfSales = {
  market: "Kaffee",
  diagram: "Umsatzveränderung",
  name: "Total",
};

const sales = {
  market: "Kaffee",
  diagram: "Durchschnittlicher Umsatz pro Kopf",
  name: "Total",
};

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
          if (e.target.value === "changeOfSales")
            dispatcher(dataSelectionActions.setSelection(changeOfSales));
          else if (e.target.value === "sales")
            dispatcher(dataSelectionActions.setSelection(sales));
          else dispatcher(dataSelectionActions.setSelection({}));
        }}
      >
        <option value="changeOfSales">Change of Sales</option>
        <option value="sales">Average Sales per Person</option>
      </Select>
    </SelectContainer>
  );
}

export default DataSelector;
