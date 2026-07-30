import React, { useEffect, useState } from "react";
import { showAllEmployees, deleteById } from "./apiServices";

const ShowData = ({ setEdit, refresh }) => {
  const [allemps, setAllemps] = useState([]);

  useEffect(() => {
    loadEmployee();
  }, [refresh]);

  const loadEmployee = async () => {
    const { data } = await showAllEmployees();
    setAllemps(data);
  };

  const handleDelete = async (id) => {
    await deleteById(id);
    loadEmployee();
  };

  return (
    <div>
      <center>
        <h2>Show Data</h2>

        <table border="2">
          <thead>
            <tr>
              <th>Name</th>
              <th>City</th>
              <th>College</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {allemps.map((s) => (
              <tr key={s.id}>
                <td>{s.name}</td>
                <td>{s.city}</td>
                <td>{s.college}</td>
                <td>
                  <button onClick={() => handleDelete(s.id)}>
                    Delete
                  </button>{" "}
                  <button onClick={() => setEdit(s)}>
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
