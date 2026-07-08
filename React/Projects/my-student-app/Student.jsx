import React, { useState } from 'react'
import './App.css'


const App = () => {

  let [allStudent, setAllStudent] = useState([])

  let [student, setStudent] = useState({ roll: '', name: '', math: '', english: '', science: '' })

  let [up , setUp] = useState(false) ; 

  const handleChange = (e) => {

  let { name, value } = e.target;

    setStudent({ ...student, [name]: value })
  }

  const handleSubmit = (e) => {

    e.preventDefault();

     const newList = allStudent.filter((std) => std.roll !== student.roll)

    setAllStudent([...newList, student])

    setUp(false)

    setStudent({ roll: '', name: '', math: '', english: '', science: '' })
  }

  const handleDelete = (roll) => {

    console.log("deleted roll : ", roll)

    const newList = allStudent.filter((std) => std.roll !== roll)

    setAllStudent(newList);
  }

  const handleUpdate = (std) =>{

    console.log("update std = " , std)

    setUp(true) ; 

    setStudent(std)
  }

return(

   <div style={{background:"white",color:"purple",width: "400px", margin: "30px auto" }}>

     <center>
    <h1>Student form...!</h1>
    
     <form onSubmit={handleSubmit}>
       
         Roll : <input type="text" name='roll' value={student.roll} onChange={handleChange} required/><br/><br/>
         Name : <input type="text" name='name' value={student.name} onChange={handleChange} required/><br></br>
         Math : <input type="text" name='math' value={student.math} onChange={handleChange} required/><br></br>
         English : <input type="text" name='english' value={student.english} onChange={handleChange} required/><br></br>
         Science : <input type="text" name='science' value={student.science} onChange={handleChange} required/><br></br>
       <button type="Submit">Add Student</button>

     </form>

     <table border={1} style={{marginTop:"20px",width:"100%"}}>

      <thead>
        <tr>
        <th>roll</th>
        <th>name</th>
        <th>math</th>
        <th>english</th>
        <th>science</th>
        <th>Total</th>
        <th>Percentage</th>
        <th>Actions</th>
  
        </tr>
      </thead>

       <tbody>
        {allStudent.map((std) => {
       const total =
      Number(std.math) +
      Number(std.english) +
      Number(std.science);
      const percentage = total / 3;

       return (
      <tr key={std.roll}>
        <td>{std.roll}</td>
        <td>{std.name}</td>
        <td>{std.math}</td>
        <td>{std.english}</td>
        <td>{std.science}</td>
        <td>{total}</td>
        <td>{percentage.toFixed(2)}%</td>


          <td>
          <button onClick={() => handleDelete(std.roll)}>
            Delete
          </button>{" "}
          <button onClick={() => handleUpdate(std)}>
            Update
          </button>
        </td>
      </tr>
    );
  })}
</tbody>
     </table>
    </center>

     </div>
    )
};


export default App;


