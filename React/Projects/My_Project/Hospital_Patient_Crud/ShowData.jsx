import React, { useEffect, useState } from "react";
import { deleteById, showAllPatient } from "./apiServices";

const ShowData = ({ setEdit, refresh }) => {
  const [allPatient, setAllPatient] = useState([]);

  useEffect(() => {
    loadPatient();
  }, [refresh]);

  const loadPatient = async () => {
    const { data } = await showAllPatient();
    setAllPatient(data);
  };

  const handleDelete = async (id) => {
    await deleteById(id);
    loadPatient();
  };

  return (
    <div>
      <center>
        <h2>Patient Data</h2>

        <table border="2">
          <thead>
            <tr>
              <th>Patient ID</th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Doctor Name</th>
              <th>Department</th>
              <th>Mobile No</th>
              <th>Email</th>
              <th>Status</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>

          <tbody>
            {allPatient.map((p) => (
              <tr key={p.id}>
                <td>{p.patientId}</td>
                <td>{p.name}</td>
                <td>{p.age}</td>
                <td>{p.gender}</td>
                <td>{p.doctorName}</td>
                <td>{p.department}</td>
                <td>{p.mobileNum}</td>
                <td>{p.email}</td>
                <td>{p.status}</td>
                <td>
                  <button onClick={() => handleDelete(p.id)}>
                    Delete
                  </button>
                </td>
                <td>
                  <button onClick={() => setEdit(p)}>
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default ShowData;
