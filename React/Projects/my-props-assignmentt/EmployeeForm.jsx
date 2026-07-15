import React, { useState } from 'react'

const EmployeeForm = ({addEmp}) => {

    const [ emp  , setEmp] = useState({id:'' , name:'', role:'' , salary:''})

    const handleChange = (e) => {
        const {name, value} = e.target ; 
        setEmp({...emp , [name] : value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("emp in add : " , emp)
        addEmp(emp)
        setEmp({id:'' , name:'', role:'' , salary:''})

    }
  return (
    <div>
        
        <h2>Add Employee Form</h2>
      <form onSubmit={handleSubmit}>
        id : <input type="text" name='id' value={emp.id} onChange={handleChange} /> <br /><br />
        name : <input type="text" name='name' value={emp.name} onChange={handleChange} /><br /><br />
        role : <input type="text" name='role' value={emp.role} onChange={handleChange} /><br /><br />
        salary : <input type="text" name='salary' value={emp.salary} onChange={handleChange} /><br /><br />
      
      <button type='submit'>Add Employee</button>
      </form>
    </div>
  )
}

export default EmployeeForm
