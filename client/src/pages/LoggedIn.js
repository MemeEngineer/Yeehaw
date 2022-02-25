import Navbar from "../components/NavBar";
import Header from "../components/Header";
import Pins from "./Pins";
import Map from "./Map";
import {Navigate, Routes, Route } from "react-router-dom";


const LoggedIn = ({setCurrentUser, currentUser}) => {
  return (
    <div>
      <Header currentUser={currentUser}/>
      <Navbar setCurrentUser={setCurrentUser} />
    <Routes>
    {/* <Route path="/" element={<Navigate to="/map"/>}/>  */}
    <Route  path="/pins" element={<Pins />} />
    <Route  path="/map" element={<Map />} />
    </Routes>
    </div>
  );
};

export default LoggedIn;