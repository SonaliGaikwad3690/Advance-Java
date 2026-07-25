import { useEffect, useState } from 'react'
import { showAllStudents, addStudent,deleteById,updateStudent } from './apiServices'
import './App.css'

const App = () => {

  const [allstds , setAllstds] =useState([])
  const [form,setForm]=useState({name:'' , role:'', salary:''})
  const [edit,setEdit]=useState(null)

  useEffect(()=>{
  loadStudents();
   },[])
   
   const loadStudents = async()=>{
     const {data}=await showAllStudents();
     setAllstds(data);
   }

    const handleDelete= async(id)=>{
      const res=await deleteById(id);
      loadStudents();

    }
    const handleChange=(s)=>{
      const {name,value}= s.target;
      setForm({...form,[name]:value});
    }
   
     const handleSubmit = async (s) => {
  s.preventDefault();

  if (edit) {
    await updateStudent(edit.id, form);
  } else {
    await addStudent(form);
  }

  setForm({ name: "", role: "", salary: "" });
  setEdit(null);
  loadStudents();
};

      const handleUpdate =(std)=>{
            setForm(std)
            setEdit(std)
      }

     
  return (
    <div>
      <center>
   
        <h1>Welcome To My 1st Assignment..!</h1>
        <form onSubmit={handleSubmit}>
         <h2>{edit ? "Update Student Form" : "Add Student Form"}</h2>         
          Name : <input type='text' name='name' value={form.name} onChange={handleChange} required></input><br></br>
          Role : <input type='text' name='role' value={form.role} onChange={handleChange} required></input><br></br>
          Salary : <input type='text' name='salary' value={form.salary} onChange={handleChange} required></input><br></br>

          <button>{edit?"update Student " : "Add Student"}</button>
        </form>

         <h2>Student Form...!</h2>

         <table border='2'>
          <thead>

            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Salary</th>
              <th>Action</th>
            </tr>

          </thead>
           <tbody>
            { allstds.map((s)=>(
            <tr key={s.id}>
              <td>{s.name}</td>
              <td>{s.role}</td>
              <td>{s.salary}</td>

              <td>
                <button onClick={()=>handleDelete(s.id)}>Delete</button>{" "}
                <button onClick={()=>handleUpdate(s)}>Update</button>{" "}

              </td>
            </tr>
                ))}
           </tbody>
            
         </table>


        </center>
    </div>
  )
}

export default App
