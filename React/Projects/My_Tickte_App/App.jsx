import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {

  const [ticktes, setAllTickets] = useState([]);
  const[form,setForm]=useState({"id":'', "name":''})

  useEffect(() => {
    loadAll();
  }, []);

  const loadAll = async () => {
    const { data } = await axios.get(`http://localhost:3000/tickets`);

    setAllTickets(data);
  };

  const handleChange=(e)=>{
    const{name , value}=e.target;
    setForm({...form,[name]:value})
  }

  const clearForm=()=>{
    setForm({name:''})
  }
  const handleSubmit=async(e)=>{
  e.preventDefault();
  if(form.id !=null){
    await axios.put(`http://localhost:3000/tickets/${form.id}`,form);
    console.log("Update Successsfullyy..!")
  }else{
   await axios.post(`http://localhost:3000/tickets`,form)
   console.log("Raise Tickets")
  }

   clearForm();
   loadAll();
  }

  const handleDelete=async(id)=>{
await axios.delete(`http://localhost:3000/tickets/${id}`)
loadAll();
  }

  const handleUpdate=async(up)=>{
    setForm(up);
  }
  return (
    <div>
      <center>

        <h1>Welcome To Tickets App</h1>
        <form onSubmit={handleSubmit}>
          Name:<input type="text" name="name" value={form.name} onChange={handleChange} required></input><br></br>
        <button type="Submit">{form.id?"Update Tcikets" : "Raise Tickets"}</button>
        </form>


        <table border="2">
          <thead>
            <tr>
              <th>Name</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {ticktes.map((t) => {
              return (
                <tr key={t.id}>
                  
                  <td>{t.name}</td>
                  <td>
                    <button onClick={()=>handleDelete(t.id)}>Delete</button>{" "}
                    <button onClick={()=>handleUpdate(t)}>Update</button>

                  </td>
                </tr>
              );
            })}
          </tbody>

        </table>

      </center>
    </div>
  );
};

export default App;
