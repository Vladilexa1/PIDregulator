import { createSignal, createEffect } from 'solid-js';
import Regulator from './Regulator';

export default function SmoothValues(props) {
    const [position, setPosition] = createSignal(props.defaultValue);
    const [speed, setSpeed] = createSignal(props.defaultValue);

    createEffect(() => {
        const pVal = position();
        const iVal = speed();
        props.onChange?.(props.title, pVal, iVal, dVal, maxPidVal);
    });

    return (
        <div class='regulator'>
            <p>{props.title}</p>
            <Regulator
                title="Position estimation smooth"
                defaultValue={position()}
                minValue={props.minValue}
                maxValue={props.maxValue}
                onChange={setPosition}
            />
            <Regulator
                title="Speed estimation smooth"
                defaultValue={speed()}
                minValue={props.minValue}
                maxValue={props.maxValue}
                onChange={setSpeed}
            />
        </div>
    );
}