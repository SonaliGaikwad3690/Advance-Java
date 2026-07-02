import { useState } from "react";

function Sum() {
  let [num1, setNum1] = useState(0);
  let [num2, setNum2] = useState(0);
  
  let [sum, setSum] = useState(0);
  let [minus, setMinus] = useState(0);
  let [Mul, setMul] = useState(0);
  let [Div, setDiv] = useState(0);
  let [Mod, setMod] = useState(0);

  return (
    <>
      <h1>Hello from Sum Component</h1>

      num1 =<input type="number" onChange={(e) => setNum1(Number(e.target.value))}/>  <br />

      num2 =<input type="number"onChange={(e) => setNum2(Number(e.target.value))}/> <br />
     
      <button onClick={() => setSum(num1 + num2)}>Add</button>
      <button onClick={() => setMinus(num1 - num2)}>Subtract</button>
      <button onClick={() => setMul(num1 * num2)}>Multiply</button>
      <button onClick={() => setDiv(num1 / num2)}>Divide</button>
      <button onClick={() => setMod(num1 % num2)}>Modulo</button>
      <h2>Sum = {sum}</h2>
      <h2>Minus = {minus}</h2>
      <h2>Multiply = {Mul}</h2>
      <h2>Divide = {Div}</h2>
      <h2>Modulo = {Mod}</h2>

    </>
  );
}

export default Sum;
