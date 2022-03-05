import React, { useState } from "react";
import mapboxgl from 'mapbox-gl';
import Maps, {MapProvider,Marker, Popup} from 'react-map-gl';
import fishicon from "./fishicon.png";
import birdicon from "./birdicon.png";
import deericon from "./deericon.png";
import biggameicon from "./biggameicon.png";
// import type {MarkerDragEvent, LngLat} from 'react-map-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoiand1NTIiLCJhIjoiY2t6eG16ajByMDE1eDJ2cGFlenliY3h4cCJ9.5EsnKD5hXlOEWUI6A5V4XQ'
// const ne = new mapboxgl.LngLat(-73.9397, 40.8002);
// console.log(ne.lng);
const Map = ({pins}) => {
const [mouse, setMouse]= useState({
  longitude: 0,
  latitude: 0,
})

function handleMouseMove(e) {setMouse({longitude: e.lng, latitude: e.lat}); }
//  function handleClick(e){
//   console.log(e.target.value);
// }
// console.log(pins[0])
// console.log(pins[0].icon.replace(/[!@#$%^&*]/g, ""))
return(
    <MapProvider>
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
      <img src={deericon} alt="deer" style={{height: "50px", width: "50px"}}/>
      Deer
      </button>
      <button>
      <img src={biggameicon} alt="biggame" style={{height: "50px", width: "50px"}}/>
      Big Game
      </button>
      </div>
       <div style={{display:"flex", justifyContent: "center", backgroundColor: "white", }}>Longitude: {mouse.longitude}</div> 
       <div style={{display:"flex", justifyContent: "center", backgroundColor: "white", }}>Latitude:  {mouse.latitude}</div> 
<Maps
      initialViewState={{
        longitude: -74.0060,
         latitude: 40.7128,
        zoom: 9
      }}
      style={{width: "100%", height: 600, display:"flex", justifyContent: "center"}}
      mapStyle= "mapbox://styles/jwu52/cl01xl7pi001515r3tb6zdpl9"
      // onClick={(e)=>handleClick(e)}
      onMouseMove={(e)=>handleMouseMove(e.lngLat)}
    >
    
        <Marker longitude={-74.0060} latitude= {40.7128} draggable={true} dragstart={true}>
                <img src= {birdicon} alt="icon" style={{height: "50px", width: "50px"}}/>
        </Marker>
        <Marker
           longitude={-74.0060}
           latitude={40.7128}
          anchor="bottom"
          draggable={true}
        ></Marker> 
      <Popup longitude={-74.0060} latitude={40.7128}
        anchor="bottom"
        >
          Best Fishing
      </Popup>
      {pins.map((pin) => (
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