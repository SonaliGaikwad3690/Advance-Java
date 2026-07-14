import { useState } from "react";

const EmployeeForm = ({ addEmployee }) => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    role: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    addEmployee(form); // Add employee to parent component

    setForm({
      id: "",
      name: "",
      role: "",
      salary: "",
    });
  };

  return (
    <div>
      <h2>Add Employee</h2>

      <form onSubmit={handleSubmit}>
        <label>Id:</label>
        <input
          type="text"
          name="id"
          value={form.id}
          onChange={handleChange}
        />
        <br />

        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <br />

        <label>Role:</label>
        <input
          type="text"
          name="role"
          value={form.role}
          onChange={handleChange}
        />
        <br />

        <label>Salary:</label>
        <input
          type="number"
          name="salary"
          value={form.salary}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default EmployeeForm;
