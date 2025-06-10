import { createSignal, onMount} from "solid-js";
import ButtonPanel from "./components/ButtonPanel";
import YawPID from "./components/YawPID"
import RollPitchSettings from "./components/RollPitchSettings"
import ThrottleSettings from "./components/ThrottleSettings"
import SmoothValues from "./components/SmoothValues";
import { settings } from "./config";
const URL = 'http://127.0.0.1:5000/'

function App() {
  const [defaultValues, setDefaultValues] = createSignal();
  const [pidData, setPidData] = createSignal()
  
  onMount(async () => {
    const res = await fetch(`${URL}`);
    const data = await res.json();
    setDefaultValues(data);
  });
  

  const handlePidChange = (title, values) => {
    setPidData(prev => ({
      ...prev,
      [title]: {...values}
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
        {defaultValues() && (
          <>
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
    
              defaultValue={{
                P: defaultValues().currentValue_RollPitchP,
                I: defaultValues().currentValue_RollPitchI,
                D: defaultValues().currentValue_RollPitchD,
                PIDMax: defaultValues().currentValue_RollPitchPIDMax,
                Reach: defaultValues().currentValue_RollPitchReach,
                Orient: defaultValues().currentOrientation
              }}
              onChange={handlePidChange}
            />
            
            <YawPID
              title={"PID Yaw"}
              minValueYawP={settings.minValue_YawP}
              maxValueYawP={settings.maxValue_YawP}
              minValueYawI={settings.minValue_YawI}
              maxValueYawI={settings.maxValue_YawI}
              minValueYawD={settings.minValue_YawD}
              maxValueYawD={settings.maxValue_YawD}
              defaultValue={{
                P: defaultValues().currentValue_YawP,
                I: defaultValues().currentValue_YawI,
                D: defaultValues().currentValue_YawD
              }}
              onChange={handlePidChange}
            />
            
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
              defaultValue={{
                P: defaultValues().currentValue_ThrottleP,
                I: defaultValues().currentValue_ThrottleI,
                D: defaultValues().currentValue_ThrottleD,
                PIDMax: defaultValues().currentValue_ThrottlePIDMax
              }}
              onChange={handlePidChange}
            />
            
            <SmoothValues
              title="Smooth values" 
              minValueEA={settings.minValue_EMA_ALPHA} 
              maxValueEA={settings.maxValue_EMA_ALPHA}
              minValueDEA={settings.minValue_D_EMA_ALPHA} 
              maxValueDEA={settings.maxValue_D_EMA_ALPHA}  
              defaultValue={{
                EMA_ALPHA: defaultValues().currentValue_EMA_ALPHA,
                D_EMA_ALPHA: defaultValues().currentValue_D_EMA_ALPHA
              }}
              onChange={handlePidChange}
            />
    
            <ButtonPanel onSend={sendToBackend}/>
          </>
        )}
      </div>
    );
}

export default App;
