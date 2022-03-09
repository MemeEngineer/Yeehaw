import { NavLink } from "react-router-dom";


const linkStyles = {
    display: "inline-block",
    width: "50px",
    padding: "12px",
    margin: "0 6px 6px",
    background: "Black",
    textDecoration: "none",
    color: "White",
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
      <nav style= {{display: 'flex', justifyContent: 'center'}}>
    <NavLink
        to="/pins"
        exact = "true"
        style={({ isActive }) => ({
          ...linkStyles,
          background: isActive ? 'Red' : 'Black',
        })}
       
      >
        Pins
      </NavLink>
      <NavLink
        exact to="/map"
        exact= "true"
        // style={linkStyles}
        style={({ isActive }) => ({
          ...linkStyles,
          background: isActive ? 'Red' : 'Black',
        })}
      >
        Map
      </NavLink>
      <NavLink
        to="/"
       exact= "true"
       style={({ isActive }) => ({
        ...linkStyles,
        background: isActive ? 'Red' : 'Black',
      })}
        onClick={handleLogout}
      >
       Logout
      </NavLink>
       
    </nav>
  );
};

export default Navbar;