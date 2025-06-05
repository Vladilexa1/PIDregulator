import { createSignal } from 'solid-js';

export default function Regulator(props){
    const [property, setProperty] = createSignal(0)
    
    return(
        <div class='regulator'>
            <span>{props.title}</span>
            <input type='text' maxLength='3' value={property()} 
            onInput={(e) => {
                let value = e.target.value;
                value = value.replace(/\D/g, "")
                if (+value > 255) value = "255";
                if (+value < 0) value = "0"
                setProperty(value);
            }}
            />
            <input type='range' min='0' max='255' value={property()} onInput={(e) => setProperty(e.target.value)}/>
        </div>
    )
}