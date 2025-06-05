import ButtonPanel from "./components/ButtonPanel";
import PIDComponent from "./components/PIDComponent"

function App() {
  return (
    <div>
      <PIDComponent title={"something 1"} minValue={0} maxValue={100} defaultValue={50}/>
      <PIDComponent title={"something 2"} minValue={0} maxValue={100} defaultValue={50}/>
      <PIDComponent title={"something 3"} minValue={0} maxValue={100} defaultValue={50}/>
      <ButtonPanel/>
    </div>
  );
}

export default App;
