import React, { useState } from 'react'
import ShowData from './ShowData'
import EmployeeForm from './EmployeeForm'

const App = () => {

  const [ref, setRef] = useState(0)

  const [emp, setEmp] = useState(null)
  return (
    <div>
      <center>
        <h1>Welocme to my JSON app</h1>

        <ShowData getRef={ref} updateEmployee={(e)=>setEmp(e)} />
        <EmployeeForm addEmp={(e) => { setRef(ref + 1), setEmp(null) }} acceptEmp={emp} />
      </center>
    </div>
  )
}

export default App
