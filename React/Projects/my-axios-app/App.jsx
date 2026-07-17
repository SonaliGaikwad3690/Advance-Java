import React, { useEffect, useState } from 'react'
import { addEmployees, showAllEmployees } from './apiServices'

const App = () => {

  const [allemps, setAllemps] = useState([])

  useEffect(() => {
    loadEmployees();
  }, [])

  const loadEmployees = async () => {
    // showAllEmployees().then((res)=>{
    //   console.log("data : " , res.data)
    //   setAllemps(res.data)
    // }).catch((err)=> {
    //   console.log("error in get : " , err)
    // })
    const { data } = await showAllEmployees();
    setAllemps(data);
  }

  const addEmp = () => {

    let emp = { name: 'raj', role: 'dev', salary: 123456 }

    addEmployees(emp).then((res) => {
      console.log("data added : ", res.data)
    }).catch((err) => {
      console.log("error in add : ", err)
    })



  }

  return (
    <div>
      <center>
        <h1>Welcome to my axios app</h1>

        <button onClick={addEmp}>
          Add Employee
        </button>

        <h2>
          All Employees
        </h2>

        <table border='2'>
          <thead>
            <tr>
              <th>NAME</th>
              <th>ROLE</th>
              <th>SALARY</th>
            </tr>
          </thead>

          <tbody>
            {
              allemps.map((e) => (
                <tr key={e.id}>
                  <td>{e.name}</td>
                  <td>{e.role}</td>
                  <td>{e.salary}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </center>
    </div>
  )
}

export default App
