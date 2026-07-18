import React, { useEffect, useState } from 'react'
import { addEmployees, deleteById, showAllEmployees, updateEmployees } from './apiServices'

const App = () => {

  const [allemps, setAllemps] = useState([])

  const [form, setForm] = useState({ name: '', role: '', salary: '' })

  const [edit, setEdit] = useState(null)

  useEffect(() => {
    loadEmployees();
  }, [])

  const loadEmployees = async () => {

    const { data } = await showAllEmployees();
    setAllemps(data);

  }



  const handleDelete = async (id) => {
    const res = await deleteById(id);
    loadEmployees();
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = async (e) => {

    e.preventDefault();
    if (edit) {
      const up = await updateEmployee(edit.id, form)
    } else {
      const add = await addEmployees(form)
    }
    
    setForm({ name: '', role: '', salary: '' })
    loadEmployees();
    setEdit(null)
  }

  const handleUpdate = (emp) => {
    setEdit(emp)
    setForm(emp)
  }
  return (
    <div>
      <center>
        <h1>Welcome to my axios app</h1>

        <form onSubmit={handleSubmit}>
          <h2>{edit ? "Update Employee Form" : "Add Employee Form"}</h2>
          name : <input type="text" name='name' value={form.name} onChange={handleChange} required /><br /><br />
          role : <input type="text" name='role' value={form.role} onChange={handleChange} required /><br /><br />
          salary : <input type="text" name='salary' value={form.salary} onChange={handleChange} required /><br /><br />

          <button>{edit ? "Update Employee" : "Add Employee"}</button>
        </form>

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
                  <td>
                    <button onClick={() => handleDelete(e.id)}>Delete</button> {" "}
                    <button onClick={() => handleUpdate(e)}>Update</button> {" "}
                  </td>
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
