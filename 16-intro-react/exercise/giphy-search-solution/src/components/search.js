import React, {useState, useEffect} from 'react'
import './search.css'

const Search = props => {
  const [searchText, setSearchText] = useState("entersomething")
  const [offset, setOffset] = useState(0)
  function handleSubmit(e) {
    e.preventDefault()
    const key = 'XvPOxKdQreOgBQ9YKlivmoMHS3aQGJnH' 
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchText}&offset=${offset}`
    fetch(url).then(response => {
      return response.json()
    }).then(formattedResponse => {
      props.updateParentState(formattedResponse.data)
    })
  }
  
  const handleChange = (e) => {
    setSearchText(e.target.value)
    setOffset(0)
  }

  const {hideHomeLink, buttonClass = 'normal'} = props
  return (
    <div className="search">
      {!hideHomeLink &&
        <a className="home-link" href="/">Home</a>
      }
      <form action="/" method="post" id="search-form" className="search-form form" onSubmit={handleSubmit} >
        <input className="input __text" onChange={handleChange}/>
        <input className={`input __submit ${buttonClass}`} type="submit" value="search"/>
      </form><br />
      <button onClick={(e) => {setOffset(offset + 25);handleSubmit(e)}}>NEXT PAGE</button>
    </div>
  )
}

export default Search