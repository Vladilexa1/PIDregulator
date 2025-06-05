import Regulator from "./Regulator"

export default function PIDComponent(props){
    return(
        <div class="regulator">
            <Regulator title="Proportional" minValue={0} maxValue={228} defaultValue={122}></Regulator>
            <Regulator title="Integral" minValue={0} maxValue={255} defaultValue={122}></Regulator>
            <Regulator title="Derivative"minValue={0} maxValue={255} defaultValue={122}></Regulator>
        </div>
    )
}
