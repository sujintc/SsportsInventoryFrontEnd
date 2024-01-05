// import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Homes/Home';
import NavBar from './NavBar';
// import {Route,Routes} from 'react-router-dom'
import Blog from './Blog';

import Additem from './Additem';
import Register from './Register';
// import Login from './Login';
import React, { useState } from 'react';

import About from './About';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import PrivateRoute from './Privateroute';
import Manageitem from './Manageitem';
// import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';



const App = () => {

  // return (
   


  //   <div>
      
  //      <div>
  //       <NavBar/>
  //      </div>
       
  //      <Routes>
       
  //       <Route path='/Home' element={<Home/>}/>
  //       <Route path='/About' element={<About/>}/>
  //       <Route path='/Blog' element={<Blog/>}/>
  //       {/* <Route path='/Inventory' element={<Inventory/>}/> */}

       


  //       {/* <Route path='/Manageitem' element={<Manageitem/>}/> */}
  //       <Route path='/Additem' element={<Additem/>}/>
  //       <Route path='/Register' element={<Register/>}/>
  //       <Route path='/Login' element={<Login/>}/>
  //       {/* <Route path='/Charts' element={<Charts/>}/> */}


        
  //      </Routes>
  //      <PrivateRoute path="/Manageitem" element={<Manageitem />} />
      
  //   </div>
  // );


  return (
    <div>
      <div>
        <NavBar />
      </div>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Blog' element={<Blog />} />
        {/* <Route path='/Inventory' element={<Inventory />} /> */}
        {/* <Route path='/Manageitem' element={<Manageitem />} /> */}
        <Route path="/Manageitem" element={<PrivateRoute><Manageitem /></PrivateRoute>} />
        <Route path='/Additem' element={<Additem />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Login' element={<Login />} />
        {/* <Route path='/Charts' element={<Charts />} /> */}

      
      </Routes>
      
    </div>
  );







};

export default App;