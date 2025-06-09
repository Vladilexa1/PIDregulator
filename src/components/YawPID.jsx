import { createSignal, createEffect } from 'solid-js';
import Regulator from './Regulator';

export default function YawPID(props) {
    const [p, setP] = createSignal(props.defaultValue.P);
    const [i, setI] = createSignal(props.defaultValue.I);
    const [d, setD] = createSignal(props.defaultValue.D);

    createEffect(() => {
        const pVal = p();
        const iVal = i();
        const dVal = d();
        props.onChange?.(props.title, {p: pVal, i: iVal, d:dVal});
    });

    return (
        <div class='regulator'>
            <p>{props.title}</p>
            <Regulator
                title="Proportional"
                defaultValue={p()}
                minValue={props.minValueYawP}
                maxValue={props.maxValueYawP}
                onChange={setP}
            />
            <Regulator
                title="Integral"
                defaultValue={i()}
                minValue={props.minValueYawI}
                maxValue={props.maxValueYawI}
                onChange={setI}
            />
            <Regulator
                title="Derivative"
                defaultValue={d()}
                minValue={props.minValueYawD}
                maxValue={props.maxValueYawD}
                onChange={setD}
            />
        </div>
    );
}