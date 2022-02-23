import { useEffect } from "react";
import { Navigate, Routes, Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
const LoggedOut = () => {

  useEffect(() => {
    <Navigate to="/login" />

  }, [])
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<LoginForm />} />
        <Route exact path="/signup" element={<SignupForm />} />
      </Routes>
    </div>
  );
};

export default LoggedOut;