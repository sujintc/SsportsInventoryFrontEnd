// import React, { useState } from 'react';
// import axios from 'axios';
// import "./Register.css"

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setmessage] = useState('');
  

//   const handleRegister = async () => {
//     try {
//       await axios.post('http://localhost:4000/api/register', { username,email, password });
//       // console.log('Registration successful!');
//       setmessage('Registration successful!');
//       alert('Registration successful!');
//       // Redirect to login or handle as needed
//     } catch (error) {
//       console.error('Registration failed:', error.response.data.message);
//     }
//   };

//   return (
//     <div>
//       <h2>Registration form</h2>
//       <input className='boxes' type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} /><br/>
//       <input className='boxes' type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /><br/>
//       <input className='boxes' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br/>
//       <button onClick={handleRegister}>Register</button>
//     </div>
//   );
// };

// export default Register;



// Registration.js

// import React, { useState } from 'react';


// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleRegister = async () => {
//     try {
//       const response = await fetch('http://localhost:4001/api/register/user', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, email, password }),
//       });

//       if (response.ok) {
//         const data = await response.json();
//         alert(data.message); // Show alert on successful registration
//       } else {
//         const errorData = await response.json();
//         console.error(errorData.error); // Handle registration error
//       }
//     } catch (error) {
//       console.error('Registration failed:', error);
//     }
//   };

//   return (
//     <div>
//       <h1>Registration</h1>
//       <form>
//         <label>Username:</label>
//         <input
//           type="text"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <label>Password:</label>
//         <input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button type="button" onClick={handleRegister}>
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;










// Register.js

import React, { useState } from 'react';
import './Register.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await fetch('https://sssportsinventorybackend.onrender.com/api/register/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        const errorData = await response.json();
        console.error(errorData.error);
      }
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
  
  const movetoLogin = () => {
    navigate('/Login');
}

  return (
    <div className="register-container">
      <h1>Registration</h1>
      <form>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="button" onClick={handleRegister}>
          Register
        </button>
        <br /><br /><br />
        <button style={{backgroundColor:"blue"}} onClick={movetoLogin} className='btn btn-success'>Back to Login Page</button>
      </form>
    </div>
  );
};

export default Register;


