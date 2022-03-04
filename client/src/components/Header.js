import Yeehaw from "./Yeehaw.gif";
const Header = ({currentUser}) => {
    return(
      <>
      {/* style= {{display: 'flex', justifyContent: 'space-between' ,height: "800px", backgroundImage: `url(${Yeehaw})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", 
      backgroundSize: "cover" }} */}
      <div >
         <img src={Yeehaw} alt="Yeehaw" style={{width:'100%', height:"300px"}}/> 
      </div>
      <div>
        <h2 style={{ display: "flex", justifyContent: "center"}}>Howdy Partner {currentUser.username}!</h2>
      </div>
      </>
    ) 
  };
  
  export default Header;