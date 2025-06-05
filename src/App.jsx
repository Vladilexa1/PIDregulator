import ButtonPanel from "./components/ButtonPanel";
import PIDComponent from "./components/PIDComponent"
import { settings } from "./config";

function App() {
  return (
    <div>
      <PIDComponent 
        title={"something 1"} 
        minValue={settings.minValue_A} 
        maxValue={settings.maxValue_A} 
        defaultValue={settings.defaultValue_A}/>
      
      <PIDComponent 
        title={"something 2"} 
        minValue={0} 
        maxValue={100} 
        defaultValue={1}/>
      
      <PIDComponent 
        title={"something 3"} 
        minValue={0} 
        maxValue={100} 
        defaultValue={1}/>
      
      <ButtonPanel/>
    </div>
  );
}

export default App;
