import { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

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

  // if (!isAuthenticated) {
  //   return <LoggedIn/>
  // }
  return (
    <div className="app">
    <h1>Welcome to Yeehaw!</h1>
      <Router>{currentUser ? <LoggedIn setCurrentUser={setCurrentUser} currentUser={currentUser}/> : <LoggedOut  />}</Router>
    </div>
  );
};

export default App;