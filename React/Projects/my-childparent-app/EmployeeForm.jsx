import { useState } from 'react';
const EmployeeForm = (addEmployee) => {
    const [form , setForm] = useState({
        id: '',
        name: '',
        salary: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div>
            <h2>Add Employee</h2>
            <form onSubmit={handleSubmit}>
                id:<input type="text" name="id" value={form.id} onChange={handleChange} /><br />
                name:<input type="text" name="name" value={form.name} onChange={handleChange} /><br />
                salary:<input type="number" name="salary" value={form.salary} onChange={handleChange} /><br />

                <button type="submit">Add Employee</button>
            </form>
        </div>
    );
};

export default EmployeeForm;
