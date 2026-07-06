import React, { useState } from 'react'
import './App.css'


const App = () => {

  let [allemployees, setAllemployees] = useState([])

  let [employee, setEmployee] = useState({ id: '', name: '', role: '', salary: '' })

  let [up , setUp] = useState(false) ; 

  const handleChange = (e) => {

  let { name, value } = e.target;

    setEmployee({ ...employee, [name]: value })
  }

  const handleSubmit = (e) => {

    e.preventDefault();

     const newList = allemployees.filter((emp) => emp.id !== employee.id)

    setAllemployees([...newList, employee])

    setUp(false)

    setEmployee({ id: '', name: '', role: '', salary: '' })
  }

  const handleDelete = (id) => {

    console.log("deleted id : ", id)

    const newList = allemployees.filter((emp) => emp.id !== id)

    setAllemployees(newList);
  }

  const handleUpdate = (emp) =>{

    console.log("update emp = " , emp)

    setUp(true) ; 

    setEmployee(emp)
  }

  

  return (
    <div>
      <center>
        <h1>Welcome to List App</h1>

        <h3>{up ? "Update Employee Form" : "Add Employee Form"}</h3>

        <form onSubmit={handleSubmit}>
          enter id : <input type="text" name='id' value={employee.id} onChange={handleChange} required/> <br /><br />
          enter name : <input type="text" name='name' value={employee.name} onChange={handleChange} required/> <br /><br />
          enter role : <input type="text" name='role' value={employee.role} onChange={handleChange} required/> <br /><br />
          enter salary : <input type="text" name='salary' value={employee.salary} onChange={handleChange} required/> <br /><br />

          <button type='submit'>{up ? "Update Employee" : "Add Employee"}</button>
        </form>

        <h3>All employees</h3>

        <table border='2'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>ROLE</th>
              <th>SALARY</th>
              <th>ACTION</th>
            </tr>
          </thead>

          <tbody>
            {allemployees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.name}</td>
                <td>{emp.role}</td>
                <td>{emp.salary}</td>
                <td>
                  <button onClick={() => handleDelete(emp.id)}>
                    Delete
                  </button> {"  "}
                  <button onClick={() => handleUpdate(emp)}>
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  )
}

export default App
