
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Homes/Home';
import NavBar from './NavBar';

import Blog from './Blog';

import Additem from './Additem';
import Register from './Register';

import React, { useState } from 'react';

import About from './About';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import PrivateRoute from './PrivateRoute';
import Manageitem from './Manageitem';




const App = () => {

  
   


  

  return (
    <div>
      <div>
        <NavBar />
      </div>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Blog' element={<Blog />} />
   
        <Route path="/Manageitem" element={<PrivateRoute><Manageitem /></PrivateRoute>} />
        <Route path='/Additem' element={<Additem />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
      

      
      </Routes>
      
    </div>
  );







};

export default App;