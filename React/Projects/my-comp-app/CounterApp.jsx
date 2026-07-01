import React, { useState } from 'react'

const CounterApp = () => {

    let name = "Tejas"

    let num = 0;

    // variable hook :  useState

    let [count, setCount] = useState(0)

    const plus = () => {

        num++;
        setCount(count + 1)
        console.log("num = ", num)
        console.log("count = ", count)
    }
    const minus = () => {

       if (count <= 0) {
        alert("cannot access below 0")
       } else {
         num--;
        setCount(count - 1)
        console.log("num = ", num)
        console.log("count = ", count)
       }
    }

    // const reset = () => {
    //     setCount(0)
    // }
    return (
        <div>

            <h1>Counter App....{name}</h1>

            <button onClick={plus}>
                Increase
            </button>
            <br /><br />
            <button onClick={minus}>
                Decrease 
            </button>  <br /><br />
            <button onClick={() => setCount(0)}>
                Reset
            </button>

            <h3>Num = {num}</h3>
            <h3>Count = {count}</h3>

        </div>
    )
}

export default CounterApp
