import { useState, useEffect } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import LoggedIn from "./pages/LoggedIn";
import LoggedOut from "./pages/LoggedOut";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [pins, setPins] = useState([]);

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
        fetch(`/getpin`)
      .then((response) => response.json())
      .then((data) => setPins(data));
      }, []);
 
      //Adding new pin from Form
  const uploadPin = (formData) => {
    console.log(formData);
    fetch(`/makepin`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((newPin) => setPins([...pins, newPin]));
  };
  console.log(pins)
  // if (!isAuthenticated) {
  //   return <LoggedIn/>
  // }
  // if (!currentUser) return <Login onLogin={setUser} />;
  return (
    <div className="app">

      {currentUser ? <LoggedIn setCurrentUser={setCurrentUser} currentUser={currentUser} pins={pins} uploadPin= {uploadPin}/> : <LoggedOut  />}
    </div>
  );
};

export default App;