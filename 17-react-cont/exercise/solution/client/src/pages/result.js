import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import GifList from "../components/list"
import { searchGifs } from "../api"

const Result = props => {
  const [gifs, setGifs] = useState([])

  useEffect(() => {
    searchGifs(props.match.params.searchText).then(results => {
      setGifs(results)
    })
  }, [props.match.params.searchText])

  return (
    <div className="page results">
      <Link to="/">Home</Link>
      <GifList gifs={gifs} />
    </div>
  )
}

export default Result
