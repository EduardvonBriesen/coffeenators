import { ScatterplotBasicDemo } from "./examples/scatterplot/ScatterplotBasicDemo";
import { Map } from "./examples/map/Map";
import HealthRegionList from "./examples/map/components/HealthRegionList";

function App() {
  return (
    <div>
      Cool charts go here
      <h1>Scatterplot </h1>
      <ScatterplotBasicDemo />
      <h1>Map</h1>
      <HealthRegionList />
    </div>
  );
}

export default App;
