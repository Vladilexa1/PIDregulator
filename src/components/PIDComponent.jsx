import { createSignal, createEffect } from 'solid-js';
import Regulator from './Regulator';

export default function PIDComponent(props) {
    const [p, setP] = createSignal(props.defaultValue);
    const [i, setI] = createSignal(props.defaultValue);
    const [d, setD] = createSignal(props.defaultValue);

    createEffect(() => {
        const pVal = p();
        const iVal = i();
        const dVal = d();
        props.onChange?.(props.title, pVal, iVal, dVal);
    });

    return (
        <div class='regulator'>
            <p>{props.title}</p>
            <Regulator
                title="Proportional"
                defaultValue={p()}
                minValue={props.minValue}
                maxValue={props.maxValue}
                onChange={setP}
            />
            <Regulator
                title="Integral"
                defaultValue={i()}
                minValue={props.minValue}
                maxValue={props.maxValue}
                onChange={setI}
            />
            <Regulator
                title="Derivative"
                defaultValue={d()}
                minValue={props.minValue}
                maxValue={props.maxValue}
                onChange={setD}
            />
        </div>
    );
}