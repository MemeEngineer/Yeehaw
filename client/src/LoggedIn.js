import Navbar from "./NavBar";
import Header from "./Header";
import Pins from "./Pins";


const LoggedIn = ({setCurrentUser, currentUser}) => {
  return (
    <div>
      <p>Hello {currentUser.username}</p>
      <Header />
      <Navbar setCurrentUser={setCurrentUser} />
      <Pins />
      
    </div>
  );
};

export default LoggedIn;