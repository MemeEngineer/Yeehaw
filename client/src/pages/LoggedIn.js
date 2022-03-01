import Navbar from "../components/NavBar";
import Header from "../components/Header";
import Pins from "./Pins";
import Map from "./Map";
import {Navigate, Routes, Route } from "react-router-dom";


const LoggedIn = ({setCurrentUser, currentUser, pins, uploadPin}) => {
  return (
    <div>
      <Header currentUser={currentUser}/>
      <Navbar setCurrentUser={setCurrentUser} />
    <Routes>
    {/* <Route path="/" element={<Navigate to="/map"/>}/>  */}
    <Route  path="/pins" element={<Pins pins={pins} uploadPin= {uploadPin} currentUser={currentUser}/>} />
    <Route  path="/map" element={<Map pins={pins}/>} />
    </Routes>
    </div>
  );
};

export default LoggedIn;