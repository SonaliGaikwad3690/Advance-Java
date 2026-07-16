import React, { useEffect, useState } from 'react'
import { deleteById, showAllEmployees } from './allData'

const ShowData = ({getRef , updateEmployee}) => {

  const [emps, setEmps] = useState([])

  // const [change , setChange] = useState(0)
  // const [ref, setRef] = useState(0)

  // useEffect(function , [])

//  const greet=()=>{
//   console.log("greet")
//  }
//  greet();

//  useEffect(() => {
//     console.log("tejas..")
//   },[ref , change])

// use effect with no dependency array : act like a normal function 
// use effect with empty dependency array : only executes once at 1st render of component 
// use effect with dependency array : executes when the value is change of dep array element

useEffect(()=>{
  loadEmployees();
} , [getRef]); 

  const loadEmployees = () => {
    setEmps(showAllEmployees())
  }

  const handleDelete = (id) => {
    deleteById(id)
    loadEmployees();
  } 


  return (
    <div>
      <br />

      <button onClick={()=>setChange(change+1)}>Change</button> {" | "}
      <button onClick={()=>setRef(ref+1)}>Ref Change</button>

      <h2>
        All Employees
      </h2>

      <table border='2'>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>ROLE</th>
            <th>SALARY</th>
          </tr>
        </thead>

        <tbody>
          {
            emps.map((e) => (
              <tr key={e.id}>

                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.role}</td>
                <td>{e.salary}</td>
                <td>
                  <button onClick={()=>handleDelete(e.id)}>Delete</button>
                  <button onClick={()=>updateEmployee(e)}>Update</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default ShowData
