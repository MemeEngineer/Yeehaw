import React, { useState } from "react";
import {Link} from 'react-router-dom';
import YeehawOG from './YeehawOG.png';
import Card from '@mui/material/Card';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();

    const userCreds = { ...formData };

    fetch("/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userCreds),
    })
      .then((r) => r.json())
      .then((user) => {
        console.log(user);
        setFormData({
          username: "",
          password: "",
          email: ""
        });
      });
  }

  return (
    
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <Card style={{display:"inline-block", justifyContent: "center"}}>
    <div style={{display:"flex", justifyContent: "center",flexDirection:"column", alignItems:"center"}}>
    
    <img src={YeehawOG} alt='Yeehaw' style={{display:"flex", justifyContent: "center", alignItems:"center",height:"300px", width:"100%"}}/>
      <h2>Signup Here!</h2>
      <div >
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input
          id="username-signup-input"
          type="text"
          name="username"
          value={formData.username}
          required
          onChange={handleChange}
          
        />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          id="email-signup-input"
          type="text"
          name="email"
          value={formData.email}
          required
          onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          id="password-signup-input"
          type="password"
          name="password"
          value={formData.password}
          required
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit" style={{display: "flex", justifyContent: "center", width: "175px"}}>Submit</button>
      </form>
      </div>
      <br/>
      <Link to="/" replace style={{display: "flex", justifyContent: "center"}}>
        Have an account already? Log in!
      </Link>
      
      </div>
      </Card>
      </div>
    
  );
};

export default SignupForm;