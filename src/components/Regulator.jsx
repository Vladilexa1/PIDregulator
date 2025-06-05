import { createSignal } from 'solid-js';


export default function Regulator(props){
    const [property, setProperty] = createSignal(props.defaultValue)
    
    return(
        <div class='container'>
                <div class='row'>
                    <span class='col-2'>{props.title}</span>
                    <input class='col-1 numberRange' type='number' value={property()} 
                        onInput={(e) => {
                            let value = e.target.value;
                            value = value.replace(/\D/g, "")
                            value = value.replace(/^0+(?!$)/, "");   
                            if (+value < props.minValue)
                            {
                                value = props.minValue;
                            } 
                            if (+value > props.maxValue) 
                            {
                                value = props.maxValue;
                            }
                            e.target.value = value;
                            setProperty(value);
                        }}
                    />
                    <input class='col-8 p-0 range' type='range' min={props.minValue} max={props.maxValue} value={property()} onInput={(e) => setProperty(e.target.value)}/>
            </div>
            
        </div>
    )
}