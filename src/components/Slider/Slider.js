import ReactSlider from "react-slider";
import './Slider.css';

    
const Slider = () => {
  return (
    <ReactSlider
      defaultValue={[50, 75]}
      className="horizontal-slider"
      thumbClassName="example-thumb"
      trackClassName="example-track"
      markClassName="example-mark"
      marks={20}
      min={0}
      max={100}
    />
  );
};

export default Slider;

