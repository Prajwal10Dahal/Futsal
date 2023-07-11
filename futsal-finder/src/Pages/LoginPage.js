import React, { useState } from 'react';
import './LoginPage.css';
import SignupForm from './SignupForm';
import backgroundImage from './test4.webp';
import { token } from 'morgan';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginType, setLoginType] = useState('player');

  const handleLogin = (event) => {
    event.preventDefault();

    if (username && password) {
      // Signup successful
      //TODO Hit signup api here
      let data = JSON.stringify({
        "name": username,
        "password": password,
      });

      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3000/users/login',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': `${token}`
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


    //TODO HIT Login api here

    // Perform login validation here based on loginType (player or futsal agent)
    // if (loginType === 'player') {
    //   // player login validation
    //   if (username === 'player' && password === 'password') {
    //     // Login successful
    //     alert('player login successful!');
    //   } else {
    //     // Login failed
    //     alert('Invalid username or password');
    //   }
    // } else if (loginType === 'agent') {
    //   // Futsal agent login validation
    //   if (username === 'agent' && password === 'password') {
    //     // Login successful
    //     alert('Futsal agent login successful!');
    //   } else {
    //     // Login failed
    //     alert('Invalid username or password');
    //   }
    // }
  }else{
          // Signup failed
          alert('Please fill in all fields');
  };

  return (
    <div className="login-container">
      <h1 className="login-heading">Login</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div className="login-input">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="login-input">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="login-type">
          <label>
            <input
              type="radio"
              value="player"
              checked={loginType === 'player'}
              onChange={() => setLoginType('player')}
            />
            Player  
          </label>
          <label>
            <input
              type="radio"
              value="agent"
              checked={loginType === 'agent'}
              onChange={() => setLoginType('agent')}
            />
           Futsal Agent
          </label>
        </div>
        <button type="submit" className="login-button">Log in</button><br/>
        <h6 className='new-account'><u>Don't have an Account?</u></h6>
        <button type="Signup" className="signup" > <a href="/signup">Sign Up</a> </button>
      </form>
     
    </div>
  );
}



export default LoginPage;

