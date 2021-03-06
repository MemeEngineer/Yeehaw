import React, { useState } from "react";
import { Link } from "react-router-dom";
import Yeehaw from "./Yeehaw.gif";
import Card from '@mui/material/Card';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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

    fetch("/login", {
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
        });
        window.location.reload(true);
      });
  }

  return (
    
    <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      <Card style={{display:"inline-block", justifyContent: "center"}}>
      <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
      
        <img src={Yeehaw} alt="Yeehaw" style={{display: "flex", justifyContent: "center", height: "300px", width:"100%"}}/>
      
      <form onSubmit={handleSubmit} style={{display: "inline-block", justifyContent: "center", alignItems: "center"}}>
        <label htmlFor="username">Username: </label>
        <input
          id="username-input"
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          id="password-input"
          type="password"
          name="password"
          value={formData.password}
          required
          onChange={handleChange}
        />
        <br />
        <br />
        <button type="submit" style={{display: "flex", justifyContent: "center", alignItems: "center", width:"175px"}}>Submit</button>
      </form>
      <br />
      <br />

      <Link to="/signup" replace>
        Don't have an account? Sign Up!
      </Link>
     
      </div>
      </Card>
    </div>
    
  );
};

export default LoginForm;