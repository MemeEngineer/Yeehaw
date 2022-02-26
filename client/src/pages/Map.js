import React, { useState } from "react";
import mapboxgl from 'mapbox-gl';
import Maps, {MapProvider,Marker, Popup} from 'react-map-gl';
import fishicon from "./fishicon.png";
import birdicon from "./birdicon.png";
import deericon from "./deericon.png";
import biggameicon from "./biggameicon.png";
//import type {MarkerDragEvent, LngLat} from 'react-map-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoiand1NTIiLCJhIjoiY2t6eG16ajByMDE1eDJ2cGFlenliY3h4cCJ9.5EsnKD5hXlOEWUI6A5V4XQ'

const Map = () => {
//  const [view , setView]= useState("", "")

//  function handleClick(e){
//   console.log(e.target.value);
// }


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
      <img src={deericon} alt="deer" style={{height: "75px", width: "75px"}}/>
      Deer
      </button>
      <button>
      <img src={biggameicon} alt="biggame" style={{height: "50px", width: "50px"}}/>
      Big Game
      </button>
      
      </div>
<Maps
      initialViewState={{
        longitude: -74.0060,
         latitude: 40.7128,
        zoom: 9
      }}
      style={{width: "100%", height: 1000, display:"flex", justifyContent: "center"}}
      mapStyle= "mapbox://styles/jwu52/cl01xl7pi001515r3tb6zdpl9"
      // onClick={(e)=>handleClick(e)}
    >
        <Marker longitude={-74.0060} latitude= {40.7128} draggable={true}>
                <img src= {birdicon} alt="icon" style={{height: "50px", width: "50px"}}/>
        </Marker>
        <Marker
           longitude={-74.0060}
           latitude={40.7128}
          anchor="bottom"
          draggable={true}
          onDragStart={0}
          onDrag={0}
          onDragEnd={1}
        ></Marker>

      <Popup longitude={-74.0060} latitude={40.7128}
        anchor="bottom"
        >
          Best Fishing
      </Popup>

    </Maps>
    </MapProvider>

)
}
  
  export default Map;