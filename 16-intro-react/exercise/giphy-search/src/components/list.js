import React, {useState} from 'react';
import Gif from './gif.js'

//components/list.js
const GifList = props => {
    const {gifs} = props
    return (
      <div className="page">
        <div className="gif-list">
          {gifs && gifs.map(gif => {
            return (
              <Gif gif={gif}/>
            )
          })}
        </div>
      </div>
    )
  }
   
  export default GifList