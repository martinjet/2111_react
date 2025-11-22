import Select from 'react-select';
import NumberInput from "./NumberInput";
import Result from "./Result";
import { calculate, operations } from '../utils/calculate';
import { useState } from 'react';

function CalculatorForm() {

    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [operation, setOperation] = useState(operations[0]);
    const [result, setResult] = useState(null);

    function handleChangeA(event) {
        setA(event.target.value);
    }

    function handleChangeB(event) {
        setB(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        const numberA = parseFloat(a);
        const numberB = parseFloat(b);
        const computeResult = calculate(numberA, numberB, operation.value)
        setResult(computeResult);
    }

    return (
        <div>
            <form className="CalculatorForm" onSubmit={handleSubmit}>
                <NumberInput name="a" label="Prvé číslo" value={a} onChange={handleChangeA}/>
                <NumberInput name="b" label="Druhé číslo" value={b} onChange={handleChangeB}/>
                <Select options={operations} value={operation} onChange={setOperation} />
                <input type="submit" value="Spočítaj" />
            </form>
            <Result value={result}/>
        </div>
    )
}

export default CalculatorForm;