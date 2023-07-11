import React, { useState } from 'react';
import './SignupForm.css';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import backgroundImage from './test5.jpg';


function SignupForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (event) => {
    event.preventDefault();

    // Perform signup validation here
    if (username && email && contact && password) {
      // Signup successful
      //TODO Hit signup api here
      let data = JSON.stringify({
        "name": username,
        "address": "",
        "email": email,
        "password": password,
        "phone": contact
      });
      
      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/users/register',
        headers: { 
          'Content-Type': 'application/json',
          
        },
        data : data
      };
      
      axios.request(config)
      .then((response) => {
        if(response.status==200){
          alert('Signup successful!');

        }
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        alert("Cannot Signup")
        console.log(error);
      });
      

      
    } else {
      // Signup failed
      alert('Please fill in all fields');
    }
  };

  return (
    <div className="signup-container">
      <h1 className="signup-heading">Futsal Finder Signup</h1>
      <form onSubmit={handleSignup} className='signup-form'>
        <label>
          Username:   <br />

          <input
            type="text"
            value={username}
            placeholder='Aashish07'
            onChange={(e) => setUsername(e.target.value)}
            className="signup-input"
          />
        </label>
        <br />
        <label>
          Email:   <br />
          <input
            type="email"
            value={email}
            placeholder='aashish123@gmail.com'
            onChange={(e) => setEmail(e.target.value)}
            className="signup-input"
          />
        </label>
        <br />
        <label>
          Contact Number:   <br />
          <input
            type="text"
            value={contact}
            placeholder='9876543210'
            onChange={(e) => setContact(e.target.value)}
            className="signup-input"
          />
        </label>
        <br />
        <label>
          Password:   <br />
          <input
            type="password"
            value={password}
            placeholder='********'
            onChange={(e) => setPassword(e.target.value)}
            className="signup-input"
          />
        </label>
        <br />
        <button type="submit" className="signup-button">Submit</button>
      </form>
    </div>
  );
}

export default SignupForm;
