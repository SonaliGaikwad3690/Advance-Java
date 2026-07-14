import { useState } from "react";
import ShowData from "./ShowData";
import EmployeeForm from "./EmployeeForm";
import "./App.css";

function App() {
  const [allemps, setAllemps] = useState([]);

  const addEmployee = (emp) => {
    setAllemps([...allemps, emp]);
  };

  const deleteEmployee = (id) => {
    setAllemps(allemps.filter((emp) => emp.id !== id));
  };

  return (
    <div>
      <center>
        <h1>Welcome to my Props Assignment...!</h1>

        <EmployeeForm addEmployee={addEmployee} />

        <ShowData
          allemps={allemps}
          deleteEmployee={deleteEmployee}
        />
      </center>
    </div>
  );
}

export default App;
