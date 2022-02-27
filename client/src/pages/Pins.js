import fishicon from "./fishicon.png";
import birdicon from "./birdicon.png";
import deericon from "./deericon.png";
import biggameicon from "./biggameicon.png";
const Pins = () => {
    return (
      <div>
        <div style={{display: "flex", justifyContent: "center"}}>
        
        <button>
        <img src={fishicon} alt="fish" style={{height: "50px", width: "50px"}}/>
        Fish
        </button>
        <button>
        <img src={birdicon} alt="bird" style={{height: "50px", width: "50px"}}/>
        Bird
        </button>
        <button>
        <img src={deericon} alt="deer" style={{height: "75px", width: "75px"}}/>
        Deer
        </button>
        <button>
        <img src={biggameicon} alt="biggame" style={{height: "50px", width: "50px"}}/>
        Big Game
        </button>
        </div>
        <form style={{ display: "flex", justifyContent: "center"}} >
            <div>
                <h1>Create Pin</h1>
              <div>
                <label>Longitude </label>
                <input
                  type="float"
                  name="longitude"
                  placeholder="longitude"
                  
                />
              </div>

              <div>
                <label>Latitude </label>
                <input
                  type="float"
                  name="latitude"
                  placeholder="latitude"
              
                />
              </div>

              <div>
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                />
              </div>
              <div style={{display:"flex", alignItems: "center", justifyContent: "center", flexWrap: "column", flexDirection:"column"}}>
                <label>Icon </label>
                <select name="icon" >
                <option name="fishicon" >Fish</option>
                <option name="deericon" >Deer</option>
                <option name="birdicon" >Bird</option>
                <option name="biggameicon" >Big Game</option>
               </select> 
        </div>
        <button className="button" type="submit" style={{display: "flex", padding: "50px", margin: "5px", justifyContent: "center", alignItems: "center", alignText: "center"}}>
              Add Pin
            </button>
            </div>
          </form>
      </div>
    );
  };
  
  export default Pins;