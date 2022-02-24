const Header = ({currentUser}) => {
    return(
      <div style= {{display: 'flex', justifyContent: 'space-between', margin: "10px"}}>
      <h1>Welcome to Yeehaw!</h1> 
      <h1>Howdy partner, {currentUser.username}</h1>
      </div>
    ) 
  };
  
  export default Header;