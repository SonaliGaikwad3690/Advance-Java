import { useState } from "react";
import "./App.css";

const Student = () => {

 const [allstd, setAllStudents] = useState([]);
  const [std, setStudent] = useState({ id: "",name: "",city: "", salary: "",});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent({ ...std, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllStudents([...allstd, std]);
    setStudent({ id: "",name: "",city: "", salary: "",});
  };

  const handleDelete = (id) => {
    const updatedStudents = allstd.filter((student) => student.id !== id);
    setAllStudents(updatedStudents);
  };

   const handleUpdate = (id) => {
  const studentToUpdate = allstd.find(
    (student) => student.id === id
  );

  if (studentToUpdate) {
    setStudent(studentToUpdate);
  }
};

  return (
    <div style={{ color: "red", backgroundColor: "purple", minHeight: "100vh" }}>
      <center>
        <h1>Student Application.....!</h1>

     <form onSubmit={handleSubmit}>
     Id :<input type='text' name='id' value={std.id} onChange={handleChange} required></input> <br></br>
     Name :<input type='text' name='name' value={std.name} onChange={handleChange} required></input> <br></br>
     City :<input type='text' name='city' value={std.city} onChange={handleChange} required></input> <br></br>
     Salary :<input type='text' name='salary' value={std.salary} onChange={handleChange} required></input> <br></br>
    
    <button type='Submit'>Add Student</button>
    
      </form>

    <table border='1' style={{marginTop:'20px'}}>
     <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>City</th>
        <th>Salary</th>
        <th>Delete</th>
        <th>Update</th>

      </tr>
     </thead>
     
     <tbody>
        {allstd.map((student, index) => (
          <tr key={index}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.city}</td>
            <td>{student.salary}</td>
            <td>
              <button onClick={() => handleDelete(student.id)}>Delete</button>
            </td>
             <td>
              <button onClick={() => handleUpdate(student.id)}>Update</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
      </center>
    </div>
  );
}

export default Student;
