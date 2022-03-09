import fishicon from "./fishicon.png";
import birdicon from "./birdicon.png";
import deericon from "./deericon.png";
import biggameicon from "./biggameicon.png";
import React, { useState } from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';



const Pins = ({pins, uploadPin, currentUser, handleDeleteClick, search}) => {

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
handleDeleteClick(e.target.value);
}

const filter = pins.filter((pin) => pin.description.toLowerCase().includes(search.toLowerCase()));
  
  return (
      <div>
        
        <div style={{display: "flex", justifyContent: "center"}}>
        
        <Button variant="contained" >
        <img src={fishicon} alt="fish" style={{height: "50px", width: "50px"}}/>
          Fish
        </Button>
        
        <Button variant="contained" color="inherit" >
        <img src={birdicon} alt="bird" style={{height: "50px", width: "50px"}}/>
        Bird
        </Button>
        <Button variant="contained" color="success">
        <img src={deericon} alt="deer" style={{height: "50px", width: "50px"}}/>
        Deer
        </Button>
      
        <Button variant="contained" color="warning" >
        <img src={biggameicon} alt="biggame" style={{height: "50px", width: "50px"}}/>
        Big Game
        </Button>
       
        </div>
        

        <Container style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "10px",
        }}
        fixed>
              {filter.map((pin) => (
                
                <Card className= "Pin-output" style={{padding:"10px", margin: "5px"}}>
                  <h3 style={{display:"flex", justifyContent: "space-evenly"}}> Pin #{pin.id} <Button variant="outlined" style={{backgroundColor:"black"}} value={pin.id} onClick={handleDelete}>❌</Button></h3> 
                  <hr/>
                  <p><span style={{fontWeight:"bold"}}>Longitude:</span> {pin.longitude}</p>
                  <p><span style={{fontWeight:"bold"}}>Latitude:</span> {pin.latitude}</p>
                  <p><span style={{fontWeight:"bold"}}>Description:</span> {pin.description}</p>
                </Card>
                
              ))}
              </Container>

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
        <Button variant="contained" color="info" className="button" type="submit" style={{display: "flex", padding: "50px", margin: "5px", justifyContent: "center", alignItems: "center", alignText: "center"}}>
              Add Pin
            </Button>
            </div>
          </form>
      </div>
    );
  };
  
  export default Pins;