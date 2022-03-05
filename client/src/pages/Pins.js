import fishicon from "./fishicon.png";
import birdicon from "./birdicon.png";
import deericon from "./deericon.png";
import biggameicon from "./biggameicon.png";
import React, { useState } from "react";

const Pins = ({pins, uploadPin, currentUser, handleDeleteClick}) => {

  const [formData, setFormData] = useState({
    user_id: currentUser.id,
    longitude: 0.000,
    latitude: 0.000,
    description: "",
    icon: "https://cdn-images-1.medium.com/max/1200/1*0IHgbmT-9k_z-V5ZN1qV6A.png",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    uploadPin(formData);
    e.target.reset();
  };

function handleDelete(e){
  // const click = e.target.value
// const selectPin = pins.filter((pin) => pin.id !== e.target.value);
// handleDeleteClick(selectPin);
// console.log(e.target.value);
handleDeleteClick(e.target.value);
}

  
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
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}>
              {pins.map((pin) => (
                <div className= "Pin-output">
                  <h3> Pin #{pin.id} <button value={pin.id} onClick={handleDelete}>X</button></h3> 
                  
                  <p>Longitude: {pin.longitude}</p>
                  <p>Latitude: {pin.latitude}</p>
                  <p>Description: {pin.description}</p>
                </div>
              ))}
              </div>

        <form style={{ display: "flex", justifyContent: "center", alignItems: "center"}} onSubmit={onSubmit}>
            <div>
                <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>Create Pin</h2>
              <div>
                <label>Longitude </label>
                <input
                  type="number"
                  step="0.0000001"
                  name="longitude"
                  placeholder="longitude"
                  className="forminput"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Latitude </label>
                <input
                  type="number"
                  step="0.0000001"
                  name="latitude"
                  placeholder="latitude"
                  className="forminput"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label>Description</label>
                <input
                  type="text"
                  name="description"
                  placeholder="description"
                  className="forminput"
                  onChange={handleChange}
                />
              </div>
              <div style={{display:"flex", alignItems: "center", justifyContent: "center", flexWrap: "column", flexDirection:"column"}}>
                <label>Icon </label>
                <select name="icon"  onChange={handleChange}>
                <option name="icon" value="https://cdn-images-1.medium.com/max/1200/1*0IHgbmT-9k_z-V5ZN1qV6A.png" >Fish</option>
                <option name="icon" value="https://cdn-images-1.medium.com/max/800/1*0sKQ6aSWNyzlhXr3VpjubQ.png" >Deer</option>
                <option name="icon" value="https://cdn-images-1.medium.com/max/1200/1*sfWjTld683Ox4NcySVxtfA.png" >Bird</option>
                <option name="icon" value="https://cdn-images-1.medium.com/max/1200/1*-VXfpshznOJCgb90pFcmSA.png">Big Game</option>
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