import { createSignal, createEffect } from 'solid-js';
import Regulator from './Regulator';

export default function YawPID(props) {
    const [p, setP] = createSignal(props.defaultValue.P);
    const [i, setI] = createSignal(props.defaultValue.I);
    const [d, setD] = createSignal(props.defaultValue.D);
    const [maxPid, setMaxPid] = createSignal(props.defaultValue.PIDMax);
    const [reach, setReach] = createSignal(props.defaultValue.Reach);
    const [orientation, setOrientation] = createSignal(props.defaultValue.Orient);

    createEffect(() => { 
        const pVal = p();
        const iVal = i();
        const dVal = d();
        const maxPidVal = maxPid();
        const reachVal = reach();
        props.onChange?.(props.title, {p: pVal, i: iVal, d: dVal, maxPidVal: maxPidVal, reachVal: reachVal, orientation: orientation()});
    });

    return (
        <div class='regulator'>
            <p>{props.title}</p>
            <Regulator
                title="Proportional"
                defaultValue={p()}
                minValue={props.minValueP}
                maxValue={props.maxValueP}
                description="QWE"
                onChange={setP}
            />
            <Regulator
                title="Integral"
                defaultValue={i()}
                minValue={props.minValueI}
                maxValue={props.maxValueI}
                onChange={setI}
            />
            <Regulator
                title="Derivative"
                defaultValue={d()}
                minValue={props.minValueD}
                maxValue={props.maxValueD}
                onChange={setD}
            />
            <Regulator
                title="Max PID"
                defaultValue={maxPid()}
                minValue={props.minValuePIDMax}
                maxValue={props.maxValuePIDMax}
                tooltips="limits the maximum position of the control signal remote sticks"
                visible={true}
                onChange={setMaxPid}
            />
            <Regulator
                title="Target reach rate"
                defaultValue={reach()}
                minValue={props.minValueReach}
                maxValue={props.maxValueReach}
                tooltips="stick speed in rc/sec"
                visible={true}
                onChange={setReach}
            />
            <div class='container'>
                <div style="display: flex; align-items: center;">
                    <span class='col-1'>Orientation</span>
                    <select class='col-0' value={orientation()} onInput={e => setOrientation(e.target.value)}>
                        <option value="1">1</option>
                        <option value="-1">-1</option>
                    </select>
                    <span class="col-1" tabindex="0" data-bs-toggle="tooltip" title={'1 "Direct", -1 "Reverse"'} style={{display: true ? "inline-block":"none"}}>
                        <button class="btn btn-secondary" type="button" disabled>?</button>
                    </span>
                </div>
            </div>
        </div>
    );
}