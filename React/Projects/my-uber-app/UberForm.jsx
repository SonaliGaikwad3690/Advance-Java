import { useEffect, useState } from "react";
import axios from "axios";

const UberForm = ({ added, editRide, clearEdit }) => {
  const [form, setForm] = useState({
    name: "",
    pick: "",
    drop: "",
  });

  // Fill the form when Update is clicked
  useEffect(() => {
    if (editRide) {
      setForm(editRide);
    }
  }, [editRide]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editRide) {
      // UPDATE
      await axios.put(
        `http://localhost:3000/rides/${editRide.id}`,
        form
      );

      clearEdit();
    } else {
      // ADD
      await axios.post(
        "http://localhost:3000/rides",
        form
      );
    }

    added();

    setForm({
      name: "",
      pick: "",
      drop: "",
    });
  };

  return (
    <div>
      <center>
        <h2>{editRide ? "Update Ride" : "Uber Form"}</h2>

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

          Pick:
          <input
            type="text"
            name="pick"
            value={form.pick}
            onChange={handleChange}
            required
          />
          <br /><br />

          Drop:
          <input
            type="text"
            name="drop"
            value={form.drop}
            onChange={handleChange}
            required
          />
          <br /><br />

          <button type="submit">
            {editRide ? "Update" : "Add"}
          </button>
        </form>
      </center>
    </div>
  );
};

export default UberForm;
