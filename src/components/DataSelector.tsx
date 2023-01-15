 import { useDispatch } from "react-redux";
import { dataSelectionActions } from "../store/data-selection-slice";

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

function DataSelector() {
  const dispatcher = useDispatch();

  return (
    <>
      <div>
        <select
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
        </select>
      </div>
    </>
  );
}

export default DataSelector;
