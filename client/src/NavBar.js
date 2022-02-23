import { NavLink } from "react-router-dom";
import Pins from "./Pins";

const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "black",
    textDecoration: "none",
    color: "white",
  };
const Navbar = ({setCurrentUser}) => {

    
    const handleLogout = () => {
        fetch('/logout', {method: "DELETE"})
        .then(res => {
              if (res.ok) {
                 setCurrentUser(null);
                window.location.reload(true);
              }
            })
      }

  return (
      <nav>
    <NavLink
        to="/pins"
        exact = "true"
        style={linkStyles}
        isactive={{
          background: "red",
        }}
      >
        Pins
      </NavLink>
      <NavLink
        exact to="/map"
        exact="true"
        style={linkStyles}
        isactive={{
          background: "red",
        }}
      >
        Map
      </NavLink>
      <NavLink
        to="/"
       exact= "true"
        style={linkStyles}
        isactive={{
          background: "red",
        }}
        onClick={handleLogout}
      >
       Logout
      </NavLink>
       
      
     
    
    </nav>
  );
};

export default Navbar;