import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Log() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loged = () => {
    axios
      .post(`http://localhost:5000/auth/login`, { email: email, password: password })
      .then((result) => {
        Cookies.set('token', result.data.token);
        Cookies.set('id', result.data.user.id);
        navigate('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="signn">
      <h1>Log in</h1>
      <div className="input-container">
        <input
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <label className="label">Enter Email</label>
        <div className="underline"></div>
      </div>
      <div className="input-container">
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <label className="label">Enter Password</label>
        <div className="underline"></div>
      </div>
      <button className="Butt" onClick={() => loged()}>
        Login
      </button>
    </div>
  );
}

export default Log;
