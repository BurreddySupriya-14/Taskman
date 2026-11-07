import react, { useState } from "react";

export default function Sum() {
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [result, setResult] = useState(null);

    const handleSum = () => {
        const sum = Number(num1) + Number(num2);
        setResult(sum);
    };

    return (
    <div>
        <h2>Sum Calculator</h2>

        <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        />
        <br /><br />
        <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        />
        <br /><br />

        <button onClick={handleSum}>Calculate Sum</button>

        {result !== null && <h3>Result: {result}</h3>}
    </div>
    );
}