import React, { useState } from "react";
import mapboxgl from 'mapbox-gl';
import Maps, {MapProvider,Marker, Popup} from 'react-map-gl';
import fishicon from "./fishicon.png";
import birdicon from "./birdicon.png";
import deericon from "./deericon.png";
import biggameicon from "./biggameicon.png";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Modal from '@mui/material/Modal';


 mapboxgl.accessToken= `${process.env.REACT_APP_API_KEY}`
 
const Map = ({pins, search, uploadPin, currentUser}) => {
const [mouse, setMouse]= useState({
  longitude: -73.935242,
  latitude: 40.730610,
})
const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function handleMouseDown(e) {setMouse({longitude:parseFloat(e.lng).toFixed(7) , latitude: parseFloat(e.lat).toFixed(7)}); }


const [formData, setFormData] = useState({
  user_id: currentUser.id,
  longitude: 0.00000000000000,
  latitude: 0.00000000000000,
  description: "",
  icon: "https://cdn-images-1.medium.com/max/1200/1*0IHgbmT-9k_z-V5ZN1qV6A.png",
});


const handleChange = (e) => {
  setFormData({ ...formData, [e.target.name]: e.target.value });
};

const onSubmit = (e) => {
  e.preventDefault();
  console.log(formData);
  uploadPin(formData);
  e.target.reset();
};

const filter = pins.filter((pin) => pin.description.toLowerCase().includes(search.toLowerCase()));
return(
    <MapProvider>
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
       <div style={{display:"flex", justifyContent: "center", marginTop:"5px"}}>
       <Button onClick={handleOpen} style={{backgroundColor:"white", fontWeight:"bold"}}>Add Pin</Button>
       <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <Container>
        <form style={{ display: "flex", justifyContent: "center", alignItems: "center"}} onSubmit={onSubmit}>
            <div>
                <h2 style={{ display: "flex", justifyContent: "center", alignItems: "center"}}>Create Pin</h2>
              <div>
                <label>Longitude</label>
                <input
                  type="text"
                  step="any"
                  name="longitude"
                  placeholder={mouse.longitude}
                  value={mouse.longitude}
                  className="forminput"
                  style={{backgroundColor: "white", width: "200px", height:"50px"}}
                  required
                  onChange={handleChange}
                />
              </div>
            <label>Latitude</label>
              <div>
                <input
                  type="text"
                  step="any"
                  name="latitude"
                  placeholder={mouse.latitude}
                  value={mouse.latitude}
                  className="forminput"
                  style={{backgroundColor: "white", width: "200px", height:"50px"}}
                  required
                  onChange={handleChange}
                />
              </div>
                <label>Description</label>
              <div>
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="forminput"
                  style={{backgroundColor: "white", width: "200px", height:"50px"}}
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={{display:"flex", alignItems: "center", justifyContent: "center", flexWrap: "column", flexDirection:"column"}}>
                <label style={{fontWeight:"bold"}} required >Icon </label>
                <select name="icon"  onChange={handleChange} style={{backgroundColor: "white", width:"50%"}}>
                <option name="icon" value="https://cdn-images-1.medium.com/max/1200/1*0IHgbmT-9k_z-V5ZN1qV6A.png" >Fish</option>
                <option name="icon" value="https://cdn-images-1.medium.com/max/800/1*0sKQ6aSWNyzlhXr3VpjubQ.png" >Deer</option>
                <option name="icon" value="https://cdn-images-1.medium.com/max/1200/1*sfWjTld683Ox4NcySVxtfA.png" >Bird</option>
                <option name="icon" value="https://cdn-images-1.medium.com/max/1200/1*-VXfpshznOJCgb90pFcmSA.png">Big Game</option>
               </select> 

               <Button variant="contained" color="info" className="button" type="submit" style={{display: "flex", margin: "5px", justifyContent: "center", alignItems: "center", alignText: "center"}}>
              Add Pin
            </Button>
        </div>
            </div>
          </form>
          </Container>
        </Box>
      </Modal>
       </div>
      <Container fixed maxWidth="sm" style={{marginTop: "5px"}}>
       <Box style={{display:"flex", justifyContent: "center", backgroundColor: "white", }}><span style={{fontWeight:"bold", marginRight: "10px"}}>Longitude: </span>   {mouse.longitude}</Box> 
       <Box style={{display:"flex", justifyContent: "center", backgroundColor: "white", }}><span style={{fontWeight:"bold", marginRight: "10px"}}>Latitude: </span>   {mouse.latitude}</Box> 
       </Container>
    
      
       
<Maps
      initialViewState={{
        longitude: -74.0060,
         latitude: 40.7128,
        zoom: 9
      }}
      style={{width: "100%", height: 600, display:"flex", justifyContent: "center"}}
      mapStyle= "mapbox://styles/jwu52/cl01xl7pi001515r3tb6zdpl9"
      
    onMouseDown={(e)=>{ console.log(e)}}
    // handleMouseDown(e.lngLat);
    >
      
        <Marker
           longitude={mouse.longitude}
           latitude={mouse.latitude}
          anchor="bottom"
          draggable={true}
          onDragEnd={(e)=>{handleMouseDown(e.lngLat)}} 
        ></Marker> 
     
      {filter.map((pin) => (
        <MapProvider>
      <Marker key={pin.id} longitude={pin.longitude} latitude={pin.latitude} draggable={true}>
        <img src={pin.icon} alt='pin' style={{height: "50px", width: "50px"}}/>
      </Marker>
      <Popup  longitude={pin.longitude} latitude={pin.latitude} anchor="bottom" closeOnClick={false} > {pin.description}</Popup>
  
      </MapProvider>))}
 
    </Maps>
    </MapProvider>
)
}
  
  export default Map;