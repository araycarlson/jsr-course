import React from 'react'
import Gif from './gif.js'

const GifList = props => {
  const {gifs} = props
  return (
    <div className="page">
      <div className="gif-list">
        {gifs && gifs.map(i => <Gif key={i.slug} gif={i}/>)}
      </div>
    </div>
  )
}
 
export default GifList