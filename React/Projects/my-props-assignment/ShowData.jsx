import React from "react";

const ShowData = ({ allemps, deleteEmployee }) => {
  return (
    <div>
      <center>
        <h2>All Employees</h2>

        <table border={2}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Role</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {allemps.map((e) => (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.role}</td>
                <td>{e.salary}</td>
                <td>
                  <button onClick={() => deleteEmployee(e.id)}>
                    Delete
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
