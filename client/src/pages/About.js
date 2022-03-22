const About = () => {

    return (
      <div>
         <div style={{display:"flex",justifyContent: "center", alignItems: "center", margin: "10px 50px 20px"}}>
          <p>
        This website made for the purpose of sharing locations of hunting, and fishing spots. As we all were once beginners, it can be difficult starting out hunting and fishing without knowledge of the local area and spots also known as "honey holes". Hopefully with the support of the hunting, fishing, and the outdoor community we can share locations of spots and spread the love for the great outdoors.
        </p>
        </div>
        <div style={{display:"flex",justifyContent: "center", alignItems: "center", margin: "10px 50px 20px 10px"}} >
            <p><span style={{fontWeight:"bold"}}>How To:</span> Using the default mapbox marker, move the marker where you would like to place a pin and click on the add pin button (add your description and choose from the icon/pin options). </p>
            <img src="https://docs.mapbox.com/help/assets/how-mapbox-works--markers-generic-thumb-960-012fd8dbcc841508a7d58e29a2dd0b91.webp"/>
        </div>
        </div>
    );
  };
  
  export default About;