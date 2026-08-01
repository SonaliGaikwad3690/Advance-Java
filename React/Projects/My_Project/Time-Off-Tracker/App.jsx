import { useState } from 'react'
import EmpLeaveForm from './EmpLeaveForm'
import ShowData from './ShowData'
import './App.css'

const App = () =>{

  const[edit,setEdit]=useState(null);
  const[refresh,setRefresh]=useState(0);
  return (
    <div>
      <center>
        <h1>Welcome To Time Off Tracker</h1>
        <ShowData setEdit={setEdit} refresh={refresh} />
        <EmpLeaveForm edit={edit} setEdit={setEdit} setRefresh={setRefresh} refresh={refresh}/>
      </center>
    </div>
  )
}

export default App
