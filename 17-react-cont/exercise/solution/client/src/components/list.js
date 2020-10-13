import React from "react";
import Gif from "./gif.js";

const GifList = (props) => {
  const { gifs } = props;
  return (
    <div className="page">
      <div className="gif-list">
        {gifs &&



          gifs.map((gif) => {
            return <Gif key={gif.id} gif={gif} />;
          })
            // let gifs_array = []
            // for(i=0;i<gifs.map;i++){
            //   gifs_array.push(<Gif key={gif.id} gif={gif} />)
            // }
        }
          
          
          
          
          
      </div>
    </div>
  );
};

export default GifList;
