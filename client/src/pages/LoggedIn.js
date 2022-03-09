import Navbar from "../components/NavBar";
import Header from "../components/Header";
import Pins from "./Pins";
import Map from "./Map";
import {Navigate, Routes, Route } from "react-router-dom";
import SearchBar from "./SearchBar";


const LoggedIn = ({setCurrentUser, currentUser, pins, uploadPin, handleDeleteClick, search, setSearch }) => {
  return (
    <div>
      <Header currentUser={currentUser}/>
      <Navbar setCurrentUser={setCurrentUser} />
      <SearchBar setSearch={setSearch}/>
    <Routes>
    {/* <Route path="/" element={<Navigate to="/map"/>}/>  */}
    <Route  path="/pins" element={<Pins pins={pins} uploadPin= {uploadPin} currentUser={currentUser} handleDeleteClick={handleDeleteClick} search={search}/>} />
    <Route  path="/map" element={<Map pins={pins} search={search}/>} />
    </Routes>
    </div>
  );
};

export default LoggedIn;