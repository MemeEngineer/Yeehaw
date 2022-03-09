import React from "react";
import TextField from '@mui/material/TextField';

function SearchBar({setSearch}) {
  return (
    <div className="search" style= {{display: 'flex', justifyContent: 'center', margin: '10px'}}>
      
      <TextField 
      id="outlined-basic"
      variant="outlined"
      style={{backgroundColor:"white"}}
      type= "text"
      label= "Search..." 
       onChange={(e)=> setSearch(e.target.value)}
       />
    </div>
  );
}

export default SearchBar;