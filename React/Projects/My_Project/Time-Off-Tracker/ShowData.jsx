import { useState, useEffect } from "react";
import { showAllLeave, deleteLeave } from "./apiServices";

const ShowData = ({ setEdit, refresh }) => {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    loadLeave();
  }, [refresh]);

  const loadLeave = async () => {
    const { data } = await showAllLeave();
    setShowData(data);
  };

  const handleDelete = async (id) => {
    await deleteLeave(id);
    loadLeave();
  };

  return (
    <div>
      <center>
        <h1>Leave Data</h1>

        <table border="1">
          <thead>
            <tr>
              <th>Employee Name</th>
              <th>Leave Date</th>
              <th>Reason</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {showData.map((l) => (
              <tr key={l.id}>
                <td>{l.employeeName}</td>
                <td>{l.leaveDate}</td>
                <td>{l.reason}</td>
                <td>{l.status}</td>
                <td>
                  <button onClick={() => handleDelete(l.id)}>
                    Delete
                  </button>

                  <button onClick={() => setEdit(l)}>
                    Edit
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
