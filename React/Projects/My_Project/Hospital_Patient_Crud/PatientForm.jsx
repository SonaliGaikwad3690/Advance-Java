import { useEffect, useState } from "react";
import { addPatient, updatePatient } from "./apiServices";

const PatientForm = ({ edit, setEdit, refresh }) => {
  const [form, setForm] = useState({
    patientId: "",
    name: "",
    age: "",
    gender: "",
    doctorName: "",
    department: "",
    mobileNum: "",
    email: "",
    status: "",
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
      await updatePatient(edit.id, form);
    } else {
      await addPatient(form);
    }

    setForm({
      patientId: "",
      name: "",
      age: "",
      gender: "",
      doctorName: "",
      department: "",
      mobileNum: "",
      email: "",
      status: "",
    });

    setEdit(null);
    refresh();
  };

  return (
    <div>
      <center>
        <h2>Patient Form</h2>

        <form onSubmit={handleSubmit}>
          
          <input
            type="text"
            name="patientId"
            value={form.patientId}
            onChange={handleChange}
            hidden
          />
          <br /><br />

          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <br /><br />

          Age:
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            required
          />
          <br /><br />

          Gender:
          <input
            type="text"
            name="gender"
            value={form.gender}
            onChange={handleChange}
            required
          />
          <br /><br />

          Doctor Name:
          <input
            type="text"
            name="doctorName"
            value={form.doctorName}
            onChange={handleChange}
            required
          />
          <br /><br />

          Department:
          <input
            type="text"
            name="department"
            value={form.department}
            onChange={handleChange}
            required
          />
          <br /><br />

          Mobile Number:
          <input
            type="text"
            name="mobileNum"
            value={form.mobileNum}
            onChange={handleChange}
            required
          />
          <br /><br />

          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <br /><br />

          Status:
          <input
            type="text"
            name="status"
            value={form.status}
            onChange={handleChange}
            required
          />
          <br /><br />

          <button type="submit">
            {edit ? "Update Patient" : "Add Patient"}
          </button>
        </form>
      </center>
    </div>
  );
};

export default PatientForm;
