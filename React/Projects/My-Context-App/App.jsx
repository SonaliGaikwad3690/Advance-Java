import React from 'react'
import './App.css'
import Dashboard from './Dashboard';
import UserContext from './UserContext';
import User from './User';


const App = () => {


  const emp = { id: 101, name: 'Sonal', role: 'dev' }

  return (
    <div>
      <center>
        <h1>Welcome to My Context App</h1>

        <UserContext.Provider value={emp}>

          <Dashboard />

        </UserContext.Provider>

      </center>
    </div>
  )
}

export default App
