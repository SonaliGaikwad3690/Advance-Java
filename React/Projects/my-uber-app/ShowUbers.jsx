import { useEffect, useState } from "react";
import axios from "axios";

const ShowUbers = ({ refresh }) => {
  const [allubers, setAllubers] = useState([]);
  const [edit,setEdit]=useState(null)

  const loadAllUbers = async () => {
    const { data } = await axios.get('http://localhost:3000/rides');
    setAllubers(data);
  };

  useEffect(() => {
    loadAllUbers();
  }, [refresh]);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/rides/${id}`);
    loadAllUbers();
  };

  
  return (
    <div>
      <center>
        <h2>All Data</h2>

        <table border="2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Pick</th>
              <th>Drop</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {allubers.map((u) => (
              <tr key={u.id}>
                <td>{u.name}</td>
                <td>{u.pick}</td>
                <td>{u.drop}</td>
                <td>
                  <button onClick={() => handleDelete(u.id)}>
                    Delete
                  </button>
                  <button onClick={() => handleUpdate(u)}>
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

export default ShowUbers;
