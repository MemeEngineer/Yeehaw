const Header = ({currentUser}) => {
    return(
      <div style= {{display: 'flex', justifyContent: 'space-between', margin: "10px"}}>
      <h2>Welcome to Yeehaw!</h2> 
      <h2>Howdy partner, {currentUser.username}</h2>
      </div>
    ) 
  };
  
  export default Header;