import React, { useState } from 'react'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Mobiles from './pages/Mobiles'
import Fashion from './pages/Fashion'
import Kids from './pages/Kids'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './ProtectedRoute'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import Message from './pages/Message'

const App = () => {

  const [acceptLogin, setAcceptLogin] = useState(null)

  const userData = localStorage.getItem('usr')
  
    const navigateMe = useNavigate() ;
    const handleLogout = () =>{
        localStorage.removeItem('usr')
        navigateMe('/login')
    }

  return (
    <div>
      <center>
        <h1>Welcome to My Route App </h1>

        <Navbar />

        <Routes>

          <Route path='/' element={<Homepage />} />
          <Route path='mobiles' element={<Mobiles />} />
          <Route path='fashion' element={<Fashion />} />
          <Route path='kids' element={<Kids />} />
          <Route path='login' element={<Login />} />

          <Route element={<ProtectedRoute />}>

            <Route path='dashboard' element={<Dashboard />} />
            <Route path='profile' element={<Profile />} />
            <Route path='settings' element={<Settings />} />
            <Route path='messages' element={<Message />} />

          </Route>




        </Routes>

        {
          userData && (
            <>
            <button onClick={handleLogout}>Logout</button> <br /><br />
            </>
          )
        }

        {/* 
        <Pay />

        <Deals/> */}
      </center>
    </div>
  )
}

export default App
