import React from 'react';
import Register from './pages/Register';
import Login from './pages/Login';
import { Routes, Route } from "react-router-dom";
import Profile from './pages/Profile';
import Navbarr from './component/Navbarr/Navbarr';



function App() {


  return (
    <div>
      <Navbarr />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>

  );
}
export default App;