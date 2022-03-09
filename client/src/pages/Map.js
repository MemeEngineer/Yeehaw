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


 mapboxgl.accessToken= `${process.env.REACT_APP_API_KEY}`
 
const Map = ({pins, search}) => {
const [mouse, setMouse]= useState({
  longitude: 0,
  latitude: 0,
})

function handleMouseMove(e) {setMouse({longitude: e.lng, latitude: e.lat}); }

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

      <Container fixed maxWidth="sm" style={{marginTop: "10px"}}>
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
      
      onMouseMove={(e)=>handleMouseMove(e.lngLat)}
    >
      
        <Marker
           longitude={-74.0060}
           latitude={40.7128}
          anchor="bottom"
          draggable={true}
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