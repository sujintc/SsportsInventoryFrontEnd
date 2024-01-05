

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import "./Login.css"

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   // const handleLogin = async () => {
//   //   try {
//   //     const response = await fetch('http://localhost:4001/api/login', {
//   //       method: 'POST',
//   //       headers: {
//   //         'Content-Type': 'application/json',
//   //       },
//   //       body: JSON.stringify({ email, password }),
//   //     });

//   //     if (response.ok) {
//   //       const data = await response.json();
//   //       alert(data.message); // Show alert on successful login
//   //     } else {
//   //       const errorData = await response.json();
//   //       console.error(errorData.message); // Handle login error
//   //     }
//   //   } catch (error) {
//   //     console.error('Login failed:', error);
//   //   }
//   // };

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('http://localhost:4001/api/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });
  
//       if (response.ok) {
//         const data = await response.json();
//         localStorage.setItem('token', data.token); // Store token in localStorage
//         alert(data.message); // Show alert on successful login
//         navigate('/Manageitem'); // Redirect to the manage item page
//       } else {
//         const errorData = await response.json();
//         console.error(errorData.message); // Handle login error
//       }
//     } catch (error) {
//       console.error('Login failed:', error);
//     }
//   };
  

//   const handleregister=()=>{
//     navigate('/Register');

//   }

//   return (
//     <div>
//       <h1>Login</h1>
//       <form>
//         <label style={{fontSize:"30px",fontWeight:"700", marginLeft:"50px"}}>Email:</label>
//         <input className='boxes1'
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <br /><br />

//         <label  style={{fontSize:"30px",fontWeight:"700", marginLeft:"50px"}}>Password:</label>
//         <input  className='boxes1'
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="button" onClick={handleLogin}>
//           Login
//         </button>
//         <br /><br /><br />
//         <button onClick={handleregister}>register</button>
//       </form>
      
//     </div>
    
//   );
// };

// export default Login;








import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"; // Make sure to import your CSS file for styling

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:4001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('token', data.token);
        alert(data.message);
        navigate('/Manageitem');
      } else {
        const errorData = await response.json();
        console.error(errorData.message);
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleRegister = () => {
    navigate('/Register');
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input
            className='boxes1'
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            className='boxes1'
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="button" onClick={handleLogin}>
          Login
        </button>

        <div className="register-link">
          <span>Don't have an account?</span>
          <button onClick={handleRegister}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

