import axios from "axios";
import { useEffect, useState } from "react"

const App=()=>{
  const [form,setForm]=useState({"id":'', "name":'', "order":'', "qty":''})
  const [orders,setOrders]=useState([])

    useEffect(()=>{
    loadOrders();
    },[])

     const loadOrders=async()=>{
     const {data}=await axios.get(`http://localhost:8081/orders`)
     console.log("Orders Load Succeessfully.....!")
     setOrders(data)
     }

     const handleDelete=async(id)=>{
      await axios.delete(`http://localhost:8081/orders/${id}`)
      console.log("Orders Deleted Succeessfully.....!")
      loadOrders();
      }

       const clearForm=()=>{
        setForm({"id":'', "name":'', "order":'', "qty":''})
       }
      const handleChange=(e)=>{
       const{name,value}=e.target;
       setForm({...form,[name]:value})
      }
       
      const handleSubmit=async(e)=>{
        e.preventDefault();
        if(form.id){
          await axios.put(`http://localhost:8081/orders/${form.id}`, form)
          console.log("Orders Updated Succeessfully.....!")

        }else{
          await axios.post(`http://localhost:8081/orders`,form)
          console.log("Orders Placed Succeessfully.....!")

        }
         clearForm();
         loadOrders();
      }

       const handleUpdate=async(up)=>{
        setForm(up)
       }
  return(
    <div>
    <center>
      <h1>Welcome To Online-Order-System</h1>

      <form onSubmit={handleSubmit}>
        {/* Id:<input type="text" name="id" value={form.id} onChange={handleChange} required></input><br></br> */}
        Name:<input type="text" name="name" value={form.name} onChange={handleChange} required></input><br></br>
        Order:<input type="text" name="order" value={form.order} onChange={handleChange} required></input><br></br>
        Quantity:<input type="text" name="qty" value={form.qty} onChange={handleChange} required></input><br></br>
        <button type="submit">{form.id ? "Update Order" : "Place Order"}</button>

         
      </form>
      
      <table border={2}>
        <thead>
          <tr>
            {/* <th>Id</th> */}
            <th>Name</th>
            <th>Order</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            orders.map((o)=>(
              <tr key={o.id}>
              {/* <td>{o.id}</td> */}
              <td>{o.name}</td>
              <td>{o.order}</td>
              <td>{o.qty}</td>
              <td>
                <button onClick={()=>handleDelete(o.id)}>Delete</button>
                <button onClick={()=>handleUpdate(o)}>Update</button>
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
  export default App
