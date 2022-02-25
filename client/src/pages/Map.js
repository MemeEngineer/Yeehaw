import mapboxgl from 'mapbox-gl';
import Maps, {MapProvider,Marker} from 'react-map-gl';
import fishicon from "./fishicon.png"


mapboxgl.accessToken = 'pk.eyJ1Ijoiand1NTIiLCJhIjoiY2t6eG16ajByMDE1eDJ2cGFlenliY3h4cCJ9.5EsnKD5hXlOEWUI6A5V4XQ'

const Map = () => {

   
return(
    <MapProvider>
<Maps
      initialViewState={{
        longitude: -74.0060,
         latitude: 40.7128,
        zoom: 9
      }}
      style={{width: "100%", height: 1000, display:"flex", justifyContent: "center"}}
      mapStyle= "mapbox://styles/jwu52/cl01xl7pi001515r3tb6zdpl9"
    >
        <Marker longitude={-74.0060} latitude= {40.7128}>
                <img src= {fishicon} alt="icon" style={{height: "50px", width: "50px"}}/>
        </Marker>
    </Maps>
    </MapProvider>

)
}
  
  export default Map;