import './Slider.css';
import styled from 'styled-components';

var CurrentDate = 2018;

function changeDate() {
  CurrentDate = document.getElementById("sliderDate").value;
  document.getElementById("output").value = CurrentDate;
}



function Slider() {
  
    return (<>


          <div>
          <label for="startDate">2018</label>
          <input type="range" id="sliderDate" name="sliderDateName" min="2018" max="2022" list="steplist" onInput={changeDate}/>
          
          <label for="EndDate">2022</label>

          </div>
          <p id="result">Average consumption in Europe in <output id="output" value="2018"/></p>


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