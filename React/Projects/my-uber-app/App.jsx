import { useState } from "react";
import ShowUbers from "./ShowUbers";
import UberForm from "./UberForm";
import "./App.css";

const App = () => {
  const [ref, setRef] = useState(0);
  const [editRide, setEditRide] = useState(null);

  return (
    <div>
      <center>
        <h1>Welcome to My Uber App</h1>

        <UberForm
          added={() => setRef((prev) => prev + 1)}
          editRide={editRide}
          clearEdit={() => setEditRide(null)}
        />

        <ShowUbers
          refresh={ref}
          onEdit={setEditRide}
        />
      </center>
    </div>
  );
};

export default App;
