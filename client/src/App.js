import { useState, useEffect } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import LoggedIn from "./pages/LoggedIn";
import LoggedOut from "./pages/LoggedOut";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [pins, setPins] = useState([]);
  const [search, setSearch] = useState("");

  //Fetches the users for authenticated users
  useEffect(() => {
    fetch("/me").then((res) => {
      if (res.ok) {
        res.json().then((user) => {
          setCurrentUser(user);
          setIsAuthenticated(true);
        });
      }
    });
  }, []);

  //Fetches Pin data 

      useEffect(() => {
        fetch(`/pins`)
      .then((response) => response.json())
      .then((data) => setPins(data));
      }, []);
 
      //Adding new pin from Form
  const uploadPin = (formData) => {
    
    fetch(`/pins`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newPin) => setPins([...pins, newPin]));
  };
  // console.log(pins)

//Deleting pin
  function handleDeleteClick(id) {
  
    fetch(`/pins/${id}`, {
    method: "DELETE",
  })
     .then(setPins(pins.filter((pin) => pin.id !== parseInt(id))));
  }
  

  // if (!isAuthenticated) {
  //   return <LoggedIn/>
  // }
  // if (!currentUser) return <Login onLogin={setUser} />;
  return (
    <div className="app">

      {currentUser ? <LoggedIn setCurrentUser={setCurrentUser} currentUser={currentUser} pins={pins} uploadPin= {uploadPin} handleDeleteClick={handleDeleteClick} search={search} setSearch={setSearch}/> : <LoggedOut  />}
    </div>
  );
};

export default App;