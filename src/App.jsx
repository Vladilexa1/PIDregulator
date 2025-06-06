import { createSignal } from "solid-js";
import ButtonPanel from "./components/ButtonPanel";
import YawPID from "./components/YawPID"
import RollPitchSettings from "./components/RollPitchSettings"
import ThrottleSettings from "./components/ThrottleSettings"
import SmoothValues from "./components/SmoothValues";
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
      <RollPitchSettings
      title={"Roll/Pitch"} 
      minValueP={settings.minValue_RollPitchP} 
      maxValueP={settings.maxValue_RollPitchP}
      minValueI={settings.minValue_RollPitchI}
      maxValueI={settings.maxValue_RollPitchI} 
      minValueD={settings.minValue_RollPitchD} 
      maxValueD={settings.maxValue_RollPitchD}  
      minValuePIDMin={settings.minValue_RollPitchPIDMax}
      maxValuePIDMax={settings.maxValue_RollPitchPIDMax} 
      minValueReach={settings.minValue_RollPitchReach} 
      maxValueReach={settings.maxValue_RollPitchReach}

      defaultValue={settings.defaultValue_A}
      onChange={handlePidChange}/>
      
      <YawPID 
        title={"PID Yaw"} 
        minValueYawP={settings.minValue_YawP} 
        maxValueYawP={settings.maxValue_YawP} 
        minValueYawI={settings.minValue_YawI} 
        maxValueYawI={settings.maxValue_YawI}
        minValueYawD={settings.minValue_YawD} 
        maxValueYawD={settings.maxValue_YawD}
        defaultValue={settings.defaultValue_A}
        onChange={handlePidChange}/>
      
      <ThrottleSettings
        title="Throttle" 
        minValueThrottleP={settings.minValue_ThrottleP} 
        maxValueThrottleP={settings.maxValue_ThrottleP}
        minValueThrottleI={settings.minValue_ThrottleI} 
        maxValueThrottleI={settings.maxValue_ThrottleI}
        minValueThrottleD={settings.minValue_ThrottleD} 
        maxValueThrottleD={settings.maxValue_ThrottleD}
        minValueThrottlePIDMax={settings.minValue_ThrottlePIDMax} 
        maxValueThrottlePIDMax={settings.maxValue_ThrottlePIDMax}
        defaultValue={settings.defaultValue_A}
        onChange={handlePidChange}/>
      
      <SmoothValues
        title="Smooth values" 
        minValueEA={settings.minValue_EMA_ALPHA} 
        maxValueEA={settings.maxValue_EMA_ALPHA}
        minValueDEA={settings.minValue_D_EMA_ALPHA} 
        maxValueDEA={settings.maxValue_D_EMA_ALPHA}  
        defaultValue={settings.defaultValue_A}
        onChange={handlePidChange}/>

      <ButtonPanel onSend={sendToBackend}/>
    </div>
  );
}

export default App;
