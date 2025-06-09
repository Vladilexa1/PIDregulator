import { createSignal, createEffect } from 'solid-js';
import Regulator from './Regulator';

export default function ThrottleSettings(props) {
    const [p, setP] = createSignal(props.defaultValue.P);
    const [i, setI] = createSignal(props.defaultValue.I);
    const [d, setD] = createSignal(props.defaultValue.D);
    const [maxPid, setMaxPid] = createSignal(props.defaultValue.PIDMax);

    createEffect(() => {
        const pVal = p();
        const iVal = i();
        const dVal = d();
        const maxPidVal = maxPid();
        props.onChange?.(props.title, {p: pVal, i: iVal, d: dVal, maxPidVal: maxPidVal});
    });

    return (
        <div class='regulator'>
            <p>{props.title}</p>
            <Regulator
                title="Proportional"
                defaultValue={p()}
                minValue={props.minValueThrottleP}
                maxValue={props.maxValueThrottleP}
                onChange={setP}
            />
            <Regulator
                title="Integral"
                defaultValue={i()}
                minValue={props.minValueThrottleI}
                maxValue={props.maxValueThrottleI}
                onChange={setI}
            />
            <Regulator
                title="Derivative"
                defaultValue={d()}
                minValue={props.minValueThrottleD}
                maxValue={props.maxValueThrottleD}
                onChange={setD}
            />
            <Regulator
                title="Max PID"
                defaultValue={maxPid()}
                minValue={props.minValueThrottlePIDMax}
                maxValue={props.maxValueThrottlePIDMax}
                description="limits the maximum position of the control signal remote sticks"
                onChange={setMaxPid}
            />
        </div>
    );
}