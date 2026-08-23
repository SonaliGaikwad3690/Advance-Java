import axios from "axios";
import { useEffect, useState } from "react";

const App=()=>{
  const [leaves,setLeaves]=useState([])

  const [form,setForm]=useState({"id":'', "name":''})

  useEffect(()=>{
    loadLeaves();
  },[])

  const loadLeaves=async()=>{
    const{data}=await axios.get(`http://localhost:8081/leaves`)
    console.log("Load Leave Successsfullyy....!")
    setLeaves(data);
  }

  const clearForm=()=>{
    setForm({id:'', name:''})
  }

  const handleDelete=async(id)=>{
  await axios.delete(`http://localhost:8081/leaves/${id}`)
      console.log("Delete Leave Successsfullyy....!")

  loadLeaves();
  }
 
  const handleChange=(e)=>{
    const{name,value}=e.target;
     setForm({...form,[name]:value})
  }

  const handleSubmit=async(e)=>{
  e.preventDefault();
  if(form.id){
 await axios.put(`http://localhost:8081/leaves/${form.id}`, form)
     console.log("Update Leave Successsfullyy....!")

  }else{
    await axios.post(`http://localhost:8081/leaves`, form)
        console.log("Add Leave Successsfullyy....!")

  }
  clearForm();
  loadLeaves();
  };

 

  const handleUpdate=async(up)=>{
    setForm(up)
  }

  return(
    <div>
      <center>
        <h1>Leave_Managemnet</h1>

        <form onSubmit={handleSubmit}>
          {/* Id:<input type="text" name="id" value={form.id} onChange={handleChange} required></input><br></br> */}
          Name:<input type="text" name="name" value={form.name} onChange={handleChange} required></input><br></br>
 
         <button type="submit">Add</button>
        </form>

        <table border={2}>
          <thead>
            <tr>
              {/* <th>Id</th> */}
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              leaves.map((l)=>(
                <tr key={l.id}>
                  {/* <td>{l.id}</td> */}
                  <td>{l.name}</td>
                  <td>
                    <button onClick={()=>handleDelete(l.id)}>Delete</button>
                    <button onClick={()=>handleUpdate(l)}>Update</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </center>
    </div>
  )
} 
 export default App;
