
import axios from "axios";
import { useEffect, useState } from "react"


const App=()=>{

  const [form,setForm]=useState({"id":'', "name":'', "orderName":'', "qty":'', "status":''})

  const [orders,setOrders]=useState([]);

  useEffect(()=>{
    loadOrders();
  }, [])

  const loadOrders=async()=>{
    const{data}=await axios.get(`http://localhost:9009/orders/getAll`);
    setOrders(data);
  } 

  const handleDelete=async(id)=>{
    await axios.delete(`http://localhost:9009/orders/delete/${id}`);
    loadOrders();
  }

  const handleChange=(e)=>{
    const{name ,  value}=e.target;
    setForm({...form,[name]:value})
  }

  const clearForm=()=>{
  setForm({"id":'', "name":'', "orderName":'', "qty":'', "status":''})
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    if(form.id){
      await axios.put(`http://localhost:9009/orders/update/${form.id}`,form);
      console.log("Order Updated Successfully.....!")
    }
    else{
      await axios.post(`http://localhost:9009/orders/post`,form);
      console.log("Order Placed Successfully.....!")
    }

    clearForm();
    loadOrders();
  }
  
  const handleUpdate=async(up)=>{
    setForm(up);
  }
  return(
    <div>
    <center>
      <h1>welcome to first App</h1>
      
      <form onSubmit={handleSubmit}>
      Name:<input type="text" name="name" value={form.name} onChange={handleChange} required></input><br></br>
      Order:<input type="text" name="orderName" value={form.orderName} onChange={handleChange} required></input><br></br>
      Quantity:<input type="text" name="qty" value={form.qty} onChange={handleChange} required></input><br></br>
      Status:<input type="text" name="status" value={form.status} onChange={handleChange} required></input><br></br>
      <button type="submit">{form.id ?"Update Order" : "Place Order"}</button>
        </form>
      <table border={2}>
        <thead>
          <tr>
            <th>Name</th>
            <th>OrderName</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <thead>
          {
            orders.map((o)=>(
              <tr key={o.id}>
                <td>{o.name}</td>
                <td>{o.orderName}</td>
                <td>{o.qty}</td>
                <td>{o.status}</td>
                <td>
                  <button onClick={()=> handleDelete(o.id)}>Delete Order</button>
                  <button onClick={()=>handleUpdate(o)}>Update Order</button>
                </td>
              </tr>
            ))
          }
        </thead>
      </table>
      </center>
    </div>
  )
} 
  export default App
