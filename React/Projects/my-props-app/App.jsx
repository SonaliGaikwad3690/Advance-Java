import { useState } from 'react'
import Sum from './Sum';
import './App.css'
import Diff from './Diff';
import React from 'react';
import Multiply from './Multi';
import Division from './Division';


function App() {

  // let a = 5;
  // let b = 6;

  const [a , setA] = useState(5);
  const [b , setB] = useState(6);

  function multiplyOpt(){

      return a * b;
  }


   return (
    <div>
      <center>
     
     <h1>Welcome to my Propes App...!</h1>
     a : <input type='text' value={a} onChange={(e)=>setA(Number(e.target.value))}/><br></br>
     b : <input type='text' value={b} onChange={(e)=>setB(Number(e.target.value))}/><br></br>

     <Sum x={a} y={b}/>
     <Diff p={a} q={b}/>
     <Multiply Multi={multiplyOpt()}/>
     <Division i={a} j={b}/>

     </center>
    </div>
  )
}

export default App
