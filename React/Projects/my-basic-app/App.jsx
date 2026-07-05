import React, { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);

    //  const [ name, setName] = useState(' ');
    //  const [age, setAge] = useState(0);
    //  const [salary, setSalary] = useState(0);

    //  console.log(name);
    //  console.log(age);
    //  console.log(salary);

    const [Student, setStudent] = useState(
      { name: '', age: 0, salary: 0 });
    console.log(Student);

  return (
    <div>
      {/* <h1>Counter App</h1>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>

      <button onClick={() => setCount(0)}>
        Reset
      </button> */}



      {/* <h1>My Name : {name}</h1>
      <input type ="text" value={name} onChange={(e) => setName(e.target.value)} />
     
       <h2>My Age : {age}</h2>
      <input type ="number" value={age} onChange={(e) => setAge(e.target.value)} />
      
       <h3>My Salary : {salary}</h3>
       <input type ="number" value={salary} onChange={(e) => setSalary(e.target.value)} /> */}



       <h1 style={{color: "Black",backgroundColor: "blue",padding: "10px",borderRadius: "5px"}}>My Name : {Student.name}</h1>
       <input type="text" value={Student.name} onChange={(e) => setStudent({...Student, name: e.target.value})} />
       
       <h2 style={{color:"pink" , backgroundColor:"black" ,padding:"10px", borderRadius:"5px"}}>My Age : {Student.age}</h2>
       <input type="number" value={Student.age} onChange={(e) => setStudent({...Student, age: parseInt(e.target.value) || 0})} />
       
       <h3 style={{color:"purple" , backgroundColor:"black", padding:"10px", borderRadius:"5px"}}>My Salary : {Student.salary}</h3>
       <input type="number" value={Student.salary} onChange={(e) => setStudent({...Student, salary: parseInt(e.target.value) || 0})} />

         <h4 style={{color:"red" , backgroundColor:"black"}}>Sonu</h4>
       {/* <h1
      style={{
    color: "white",
    backgroundColor: "blue",
    padding: "10px",
    borderRadius: "5px"
  }}
>
  My Name : {Student.name}
</h1>

<input
  type="text"
  value={Student.name}
  onChange={(e) =>
    setStudent({ ...Student, name: e.target.value })
  }
/>

<h2
  style={{
    color: "yellow",
    backgroundColor: "green",
    padding: "10px",
    borderRadius: "5px"
  }}
>
  My Age : {Student.age}
</h2>

<input
  type="number"
  value={Student.age}
  onChange={(e) =>
    setStudent({
      ...Student,
      age: parseInt(e.target.value) || 0,
    })
  }
/>

<h3
  style={{
    color: "black",
    backgroundColor: "pink",
    padding: "10px",
    borderRadius: "5px"
  }} */}
{/* >
  My Salary : {Student.salary}
</h3>

<input
  type="number"
  value={Student.salary}
  onChange={(e) =>
    setStudent({
      ...Student,
      salary: parseInt(e.target.value) || 0,
    })
  } */}
{/* /> */}
    </div>
  );
}

export default App;
