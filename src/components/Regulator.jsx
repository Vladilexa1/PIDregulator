import { createSignal, createEffect } from 'solid-js';

export default function Regulator(props) {
    const [property, setProperty] = createSignal(props.defaultValue);

    createEffect(() => {
        props.onChange?.(+property());
    });

    return (
        <div class='container'>
            <div class='row'>
                <span class='col-2'>{props.title}</span>
                <input
                    class='numberRange'
                    type='number'
                    value={property()}
                    onInput={(e) => {
                        let value = e.target.value;
                        value = value.replace(/\D/g, "");
                        value = value.replace(/^0+(?!$)/, "");
                        let numeric = +value;
                        if (numeric < props.minValue) numeric = props.minValue;
                        if (numeric > props.maxValue) numeric = props.maxValue;

                        setProperty(numeric);
                        e.target.value = numeric;
                    }}
                />
                <input
                    class='col-8 p-0 range'
                    type='range'
                    min={props.minValue}
                    max={props.maxValue}
                    value={property()}
                    onInput={(e) => {
                        const val = +e.target.value;
                        setProperty(val);
                    }}
                />
            </div>
        </div>
    );
}