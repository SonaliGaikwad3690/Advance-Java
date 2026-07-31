import { useState } from 'react'
import ShowData from './ShowData';
import './App.css'
import PatientForm from './PatientForm';

const App = () =>  {

  const[edit,setEdit]=useState(null);

  const[refresh,setRefresh]=useState(0);

  return (
    <div>
      <center>
       
      <h1>Welcome To Hospital-Patient-CRUD </h1>
      <PatientForm edit={edit} setEdit={setEdit} refresh={()=>setRefresh(refresh)+1} />
      <ShowData setEdit={setEdit} refresh={refresh}/>
      
        </center>
    </div>
  )
}

export default App
