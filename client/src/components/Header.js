import Yeehaw from "./Yeehaw.gif";
const Header = ({currentUser}) => {
    return(
      <>
      <div style= {{display: 'flex', justifyContent: 'space-between' ,height: "600px", backgroundImage: `url(${Yeehaw})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", 
      backgroundSize: "cover" }}>
        {/* <img src={Yeehaw} alt="Yeehaw"/> */}
      </div>
      <div>
        <h2 style={{ display: "flex", justifyContent: "center"}}>Howdy Partner {currentUser.username}!</h2>
      </div>
      </>
    ) 
  };
  
  export default Header;