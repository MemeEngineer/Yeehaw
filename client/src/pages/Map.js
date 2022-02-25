import mapboxgl from 'mapbox-gl';
import Maps from 'react-map-gl';

mapboxgl.accessToken = 'pk.eyJ1Ijoiand1NTIiLCJhIjoiY2t6eG16ajByMDE1eDJ2cGFlenliY3h4cCJ9.5EsnKD5hXlOEWUI6A5V4XQ';
const Map = () => {

    
return(

<Maps
      initialViewState={{
        longitude: -74.0060,
         latitude: 40.7128,
        zoom: 9
      }}
      style={{width: "100%", height: 1000, display:"flex", justifyContent: "center"}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
)
}
  
  export default Map;