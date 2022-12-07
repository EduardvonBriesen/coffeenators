import './Slider.css';
import { useState, useEffect } from "react";
import styled from 'styled-components';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

{/*
to do: import store and use useDispatch to get year

function DataSelection() {
  const dispatcher = useDispatch();
  const { market, diagram, name } = useSelector(
    (state: RootState) => state.dataSelection
  );

*/}


var AverageOfYear = 0;




const Text = styled.p`
  column-count: 1;
  text-align: center;
  max-width: 750px;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
`;

const Label = styled.label`
  text-align: center;
  max-width: 50px;
  font-weight: 400;
  font-size: 18px;
  line-height: 0px;
`;
const Range = styled.input`
width: 500px;
margin: 0px 20px;
background: transparent; 
background-color: transparent;

&:focus{
    outline: none; 
}

&::-webkit-slider-thumb {
  box-shadow: 0px 0px 0px #000000, 0px 0px 0px #0d0d0d;
  height: 20px;
  width: 39px;
  background: #000000;
  border: 1px solid #000000;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -3.6px;
}

&::-webkit-slider-runnable-track {
  background: #000000;
  width: 100%;
  height: 8.4px;
  cursor: pointer;
}
`;


function Slider() {
    const [CurrentDate, setCurrentDate] = useState(2018);

    function changeDate(event) {
      setCurrentDate(event.target.value)
      
     {/* 
     CurrentDate = document.getElementById("sliderDate").value;
      document.getElementById("output").value = CurrentDate + " average is: " + AverageOfYear;
     
     const dispatcher = useDispatch();
      dispatcher(dataSelectionActions.setYear(CurrentDate));
      */}
      console.log(CurrentDate);
    }
    


    return (<>


          <div>
          <Label for="startDate">2018</Label>
          <Range type="range" id="sliderDate" name="sliderDateName" min="2018" max="2022" list="steplist" onInput={changeDate}/>
          
          <Label for="EndDate">2022</Label>

          </div>
          <Text id="result">Average consumption in Europe in {CurrentDate}</Text>


          <datalist id="steplist">
            <option value="2018"></option>
            <option value="2019"></option>
            <option value="2020"></option>
            <option value="2021"></option>
            <option value="2022"></option>
          </datalist>
      </>

    );
}

export default Slider;