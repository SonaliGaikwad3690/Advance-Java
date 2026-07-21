import react from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = ()=> {

  return (
    <div>
      <center>

      <NavLink to='home' >Home</NavLink>{"   |  "}
      <NavLink to='mobiles' >Mobiles</NavLink>{"   |  "}
      <NavLink to='kids' >Kids</NavLink>{"   |  "}
      <NavLink to='fashion' >Fashion</NavLink>{"   |  "}

      </center>
           
    </div>
  )
}

export default Navbar
