import { useState, useEffect } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
import LoggedIn from "./pages/LoggedIn";
import LoggedOut from "./pages/LoggedOut";

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
  // if (!currentUser) return <Login onLogin={setUser} />;
  return (
    <div className="app">

      {currentUser ? <LoggedIn setCurrentUser={setCurrentUser} currentUser={currentUser}/> : <LoggedOut  />}
    </div>
  );
};

export default App;