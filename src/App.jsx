import { createSignal } from "solid-js";
import ButtonPanel from "./components/ButtonPanel";
import PIDComponent from "./components/PIDComponent"
import { settings } from "./config";
const URL = 'http://127.0.0.1:5000/'

function App() {
  const [pidData, setPidData] = createSignal()
  const handlePidChange = (title, p, i, d) => {
    setPidData(prev => ({
      ...prev,
      [title]: { p, i, d }
    }));
  };

  function sendToBackend() {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(pidData())
    })}

  return (
    <div>
      <PIDComponent 
        title={"something 1"} 
        minValue={settings.minValue_A} 
        maxValue={settings.maxValue_A} 
        defaultValue={settings.defaultValue_A}
        onChange={handlePidChange}/>
      
      <PIDComponent 
        title={"something 2"} 
        minValue={settings.minValue_A} 
        maxValue={settings.maxValue_A} 
        defaultValue={settings.defaultValue_A}
        onChange={handlePidChange}/>
      
      <PIDComponent 
        title={"something 3"} 
        minValue={settings.minValue_A} 
        maxValue={settings.maxValue_A} 
        defaultValue={settings.defaultValue_A}
        onChange={handlePidChange}/>
      
      <ButtonPanel onSend={sendToBackend}/>
    </div>
  );
}

export default App;
