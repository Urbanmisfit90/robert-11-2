
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
    console.log('testing');
    axios.post('http://localhost:9000/api/login', {username: email, password}).then(res => {
        localStorage.setItem('token', res.data.token);
        console.log(res.data);
        navigate('/friends');
    })
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className='login-form'>
        <input
        className='login-input'
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <input
        className='login-input'
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <br />
        <button className='login-button' type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
