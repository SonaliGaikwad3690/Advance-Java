import { useState } from 'react'
import EmployeeForm from './EmployeeForm'
import './App.css'
import ChildComponant from './ChildComponant'
import ShowAllEmployee from './ShowAllEmployee'

function App() {

  let [employee, setEmployees] = useState([
    {id: 1, name: "John Doe" , salary: 50000 },
    { id: 2, name: "Jane Smith" , salary: 60000 },
    { id: 3, name: "Bob Johnson" , salary: 55000 }
  ])

  function acceptFromChild (msg ,s1,s2,s3){
    console.log("Child To App -->",msg ,s1,s2,s3)
  }

 function acceptDeletedId(id) {
  console.log("Deleted Id from Child to App -->",id)
  console.log(employee)

  let updatedEmployees = employee.filter(emp => emp.id !== id);
  setEmployees(updatedEmployees);
}

const acceptAdd = (emp) => {
  const newAdd=[...employee,emp]
  setEmployees(newAdd)
  console.log("Added Employee from Child to App -->", emp);

}

  return (
    <>
      
      <h1>Hello Childe-Parent App....!</h1>
      <ChildComponant sendToApp={acceptFromChild}/>
      <br></br>
      <EmployeeForm add={acceptAdd}  acceptEmployee={acceptAdd}/>
      <ShowAllEmployee allemps={employee} deleteById={acceptDeletedId}/>
    </>
  )
} 

export default App
