import React from 'react';

//Gif
import LoadGif from "../gif/Loading.gif";

const Loader = () => {
    return (
        <>
          <img src={LoadGif} alt='loading'/>
          <h1>Loading</h1>  
        </>
    );
};

export default Loader;