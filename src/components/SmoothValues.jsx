import { createSignal, createEffect } from 'solid-js';
import Regulator from './Regulator';

export default function SmoothValues(props) {
    const [position, setPosition] = createSignal(props.defaultValue.EMA_ALPHA);
    const [speed, setSpeed] = createSignal(props.defaultValue.D_EMA_ALPHA);

    createEffect(() => {
        const pVal = position();
        const sVal = speed();
        props.onChange?.(props.title, {position: pVal, speed: sVal});
    });

    return (
        <div class='regulator'>
            <p>{props.title}</p>
            <Regulator
                title="Position estimation smooth"
                defaultValue={position()}
                minValue={props.minValueEA}
                maxValue={props.maxValueEA}
                onChange={setPosition}
            />
            <Regulator
                title="Speed estimation smooth"
                defaultValue={speed()}
                minValue={props.minValueDEA}
                maxValue={props.maxValueDEA}
                onChange={setSpeed}
            />
        </div>
    );
}