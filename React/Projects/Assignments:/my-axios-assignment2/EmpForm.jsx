import React, { useState, useEffect } from "react";
import { addEmp, updateEmployee } from "./apiServices";

const EmpForm = ({ edit, setEdit, refresh }) => {
  const [form, setForm] = useState({
    name: "",
    city: "",
    college: "",
  });

  useEffect(() => {
    if (edit) {
      setForm(edit);
    }
  }, [edit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (edit) {
      await updateEmployee(edit.id, form);
    } else {
      await addEmp(form);
    }

    setForm({
      name: "",
      city: "",
      college: "",
    });

    setEdit(null);
    refresh();
  };

  return (
    <div>
      <center>
        <h2>{edit ? "Update Employee" : "Add Employee"}</h2>

        <form onSubmit={handleSubmit}>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <br /><br />

          City:
          <input
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            required
          />
          <br /><br />

          College:
          <input
            type="text"
            name="college"
            value={form.college}
            onChange={handleChange}
            required
          />
          <br /><br />

          <button type="submit">
            {edit ? "Update Employee" : "Add Employee"}
          </button>
        </form>
      </center>
    </div>
  );
};

export default EmpForm;



//   <form onSubmit={handleSubmit}>
//                 Name:<input type="text" name="name" value={form.name} onChange={handleChange} required ></input><br></br>
//                 City:<input type="text" name="city" value={form.city}  onChange={handleChange}required></input><br></br>
//                 College:<input type="text" name="college" value={form.college} onChange={handleChange} required></input><br></br>
//                   <button type="submit">{edit? "Upadte Employee " : "Add Employee"}</button>
//                 </form>
