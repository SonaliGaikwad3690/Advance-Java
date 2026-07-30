import { useState } from "react";
import ShowData from "./ShowData";
import EmpForm from "./EmpForm";
import "./App.css";

const App = () => {
  const [edit, setEdit] = useState(null);
  const [refresh, setRefresh] = useState(0);

  return (
    <div>
      <center>
        <h1>Welcome to My Axios Assignment...!</h1>

        <EmpForm
          edit={edit}
          setEdit={setEdit}
          refresh={() => setRefresh((prev) => prev + 1)}
        />

        <br />

        <ShowData
          setEdit={setEdit}
          refresh={refresh}
        />
      </center>
    </div>
  );
};

export default App;
