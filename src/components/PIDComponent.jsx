import Regulator from "./Regulator"

export default function PIDComponent(props){
    return(
        <div class="regulator">
            <p>{props.title}</p>
            <Regulator title="Proportional" minValue={props.minValue} maxValue={props.maxValue} defaultValue={props.defaultValue}></Regulator>
            <Regulator title="Integral" minValue={props.minValue} maxValue={props.maxValue} defaultValue={props.defaultValue}></Regulator>
            <Regulator title="Derivative"minValue={props.minValue} maxValue={props.maxValue} defaultValue={props.defaultValue}></Regulator>
        </div>
    )
}
