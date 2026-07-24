import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      
      <nav>

             <NavLink to='/'>Home</NavLink>{" | "}
             <NavLink to='mobiles'>Mobiles</NavLink>{" | "}
             <NavLink to='fashion'>Fashion</NavLink>{" | "}
             <NavLink to='kids'>Kids</NavLink>{" | "}
             <NavLink to='login'>Login</NavLink>{" | "}
             <NavLink to='dashboard'>Dashboard</NavLink>{" | "}
             <NavLink to='profile'>Profile</NavLink>{" | "}
             <NavLink to='settings'>Settings</NavLink>{" | "}
             <NavLink to='messages'>Messages</NavLink>{" | "}
      </nav>

    </div>
  )
}

export default Navbar
