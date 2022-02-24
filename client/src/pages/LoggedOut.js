import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import LoginForm from "../forms/LoginForm";
import SignupForm from "../forms/SignupForm";

const LoggedOut = () => {

  
  // useEffect(() => {
  //   <Navigate to="/login" />

  // }, [])
  return (
    <div>
      <Routes>
        <Route  path="/" element={<LoginForm />} />
        <Route  path="/signup" element={<SignupForm />} />
      </Routes>
    </div>
  );
};

export default LoggedOut;