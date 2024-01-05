import React from 'react';

import './NavBar.css'
import { Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
        <div>
            {/* <nav>
                <Link to='/'>Home</Link>
                <Link to='/About'>About</Link>
                <Link to='/Blog'>Blog</Link>
                <Link to='/Inventory'>Inventory</Link>
                <Link to='/Manageitem'>Manageitem</Link>
                <Link to='/Additem'>Additem</Link>
            </nav> */}
            
        

            {/* <Nav defaultActiveKey="/home" as="ul">
            <img  style={{borderRadius:"50%",height:"100px"}} src="https://cdn.vectorstock.com/i/preview-1x/29/97/isolated-cricket-bat-and-ball-vector-25562997.jpg" alt="" />
            <h1 style={{marginTop:"20px"}}> <span style={{fontFamily:"MozAnimation", fontSize:"70px"}}>S</span> Sports </h1>
            <Nav.Item as="li"  style={{ marginTop:"30px"}}>
        
      <Nav.Item as="li"b  style={{marginLeft:"70px", marginTop:"30px"}} >
        <Nav.Link className='textstyle'  href="/Home">Home</Nav.Link>
        
      </Nav.Item>
     
      <Nav.Item as="li" style={{ marginTop:"30px"}} >
        <Nav.Link className='textstyle' href="/About">About</Nav.Link>
      </Nav.Item>
    
      <Nav.Link className='textstyle' href="/Login">Login</Nav.Link>
      </Nav.Item>
    </Nav> */}
         <Nav defaultActiveKey="/home" as="nav">
      <div className="logo-container">
        <img className="logo" src="https://cdn.vectorstock.com/i/preview-1x/29/97/isolated-cricket-bat-and-ball-vector-25562997.jpg" alt="logo" />
        <h1>
          <span>S</span> Sports
        </h1>
      </div>

      <Nav.Item as="ul" className="nav-links">
        <li>
          <Nav.Link className='textstyle' href="/">Home</Nav.Link>
        </li>
        <li>
          <Nav.Link className='textstyle1' href="/About">About</Nav.Link>
        </li>
        <li>
          <Nav.Link className='textstyle' href="/Login"><button>Login</button></Nav.Link>
        </li>
      </Nav.Item>
    </Nav>



        </div>
    );
};

export default NavBar;