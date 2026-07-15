import React, { useState } from 'react'
import './App.css'
import ShowData from './ShowData'
import EmployeeForm from './EmployeeForm'
import MyProp from './MyProp'
import Diif from './Diif'


const App = () => {

  const [allemployees, setAllemployees] = useState([])

  const recieveEmp = (emp) => {
    console.log("emp in app : ", emp)
    setAllemployees([...allemployees, emp])
  }

  const recieveDeleteId = (id) => {

    console.log("del id in app : ", id)
    const newList = allemployees.filter((e) => e.id != id)

    setAllemployees(newList)

  }

  let a = 5 ; 
  let b = 3 ; 
  return (
    <div>
      <center>
        <h1>
          Welcome to my-props-assignment
        </h1>

        <MyProp x={a} y={b}/>

        <Diif p={a} q={b}/>
        
        <ShowData allemps={allemployees} deleteById={recieveDeleteId} />
        <EmployeeForm addEmp={recieveEmp} />
        
      </center>
    </div>
  )
}

export default App
