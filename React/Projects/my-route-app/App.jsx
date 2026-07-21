import React from 'react';
import './App.css';

import Kids from './pages/Kids';
import Fashion from './pages/Fashion';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Homepage';
import Mobiles from './pages/Mobiles';

const App = () => {

  return (

    <div>
      <center>
        <h1>Welcome to My Route App...!</h1>
        <Navbar/>

        <Routes>
          <Route path="fashion" element={<Fashion />} />{"  |  "}
          <Route path="kids" element={<Kids />} />{"  |  "}
          <Route path="home" element={<Home />} />{"  |  "}
          <Route path='mobiles' element={<Mobiles/>}/>{"  |  "}

        </Routes>
      </center>
    </div>
  );
};

export default App;
