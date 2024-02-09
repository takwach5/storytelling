import React, { useState } from 'react';
import axios from 'axios';

function Sign() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sign = () => {
    axios
      .post(`http://localhost:5000/auth/Register`, { name: name, email: email, password: password })
      .then(() => {
        console.log('welcome new user');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const imageee = {
    backgroundImage: 'url("https://img.freepik.com/psd-gratuit/salle-interieure-etageres-decoration_176382-526.jpg?w=900&t=st=1707429637~exp=1707430237~hmac=91297782f0044dc1070d553c6e3b127449ae8036156afd4dc06ca5b986adf196")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  };

  return (
    <div className='signn' >
      <h1 className='titleee'>Sign in</h1>
      <div className='input-container'>
        <input
          type='text'
          onChange={(e) => {
            setName(e.target.value);
          }}
          required
        />
        <label className='label'>Enter Name</label>
        <div className='underline'></div>
      </div>
      <div className='input-container'>
        <input
          type='text'
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required
        />
        <label className='label'>Enter Email</label>
        <div className='underline'></div>
      </div>
      <div className='input-container'>
        <input
          type='password'
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required
        />
        <label className='label'>Enter Password</label>
        <div className='underline'></div>
      </div>
      <button className='Butt' onClick={() => sign()}>
        Sign in
      </button>
    </div>
  );
}

export default Sign;
