import React, { useEffect, useState } from 'react'
import { addEmployee, updateEmployee } from './allData';

const EmployeeForm = ({ addEmp, acceptEmp }) => {

    const [emp, setEmp] = useState({ id: '', name: '', role: '', salary: '' })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmp({ ...emp, [name]: value })
    }

    useEffect(() => {
        if (acceptEmp) {
            setEmp(acceptEmp)
            console.log(acceptEmp)
        }
    }, [acceptEmp])

    const handleSubmit = (e) => {
        e.preventDefault();

       
    if (acceptEmp) {
        updateEmployee(acceptEmp.id , emp)
    } else {
            addEmployee(emp);
    }
        addEmp(1)
        setEmp({ id: '', name: '', role: '', salary: '' })

    }
    return (
        <div>

            <h2>{acceptEmp ? 'Update Employee Form' : 'Add Employee Form'}</h2>
            <form onSubmit={handleSubmit}>
                id : <input type="text" name='id' value={emp.id} onChange={handleChange} /> <br /><br />
                name : <input type="text" name='name' value={emp.name} onChange={handleChange} /><br /><br />
                role : <input type="text" name='role' value={emp.role} onChange={handleChange} /><br /><br />
                salary : <input type="text" name='salary' value={emp.salary} onChange={handleChange} /><br /><br />

                <button type='submit'>{acceptEmp ? 'Update Employee' : 'Add Employee'}</button>
            </form>
        </div>
    )
}

export default EmployeeForm
