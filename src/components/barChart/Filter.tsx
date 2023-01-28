import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";
import { dataSelectionActions } from "../../store/data-selection-slice";
import styled from "styled-components";
import { getColor } from "../../helpers/getColor";

const FilterContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Checkbox = styled("div")<{ color: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;

  label {
    font-size: 1.5vh;
  }

  input {
    accent-color: ${(props) => props.color};
  }
`;

function Filter() {
  const dispatcher = useDispatch();
  const { categories, filterSelection } = useSelector(
    (state: RootState) => state.dataSelection
  );

  if (!categories) return null;

  return (
    <FilterContainer>
      {categories.map(({ name, selector }) => (
        <Checkbox color={getColor(1, 0, 2, selector) as any}>
          <label>{name}</label>
          <input
            type="checkbox"
            checked={filterSelection.includes(selector)}
            onChange={() => {
              if (filterSelection.includes(selector)) {
                dispatcher(
                  dataSelectionActions.setFilterSelection(
                    filterSelection.filter((item) => item !== selector)
                  )
                );
              } else {
                dispatcher(
                  dataSelectionActions.setFilterSelection([
                    ...filterSelection,
                    selector,
                  ])
                );
              }
            }}
          />
        </Checkbox>
      ))}
    </FilterContainer>
  );
}

export default Filter;
