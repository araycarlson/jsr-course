import React, {useState} from 'react'
import './search.css'

const Search = props => {
  const [searchText, setSearchText] = useState()

  // we add a function to handle the submission of the search form
  const handleSubmit = e => {
    e.preventDefault()
    const key = 'XvPOxKdQreOgBQ9YKlivmoMHS3aQGJnH' 
    const url = `http://api.giphy.com/v1/gifs/search?api_key=${key}&q=${searchText}`
  
    fetch(url).then(response => {
      return response.json()
    }).then(response => {
      console.log(response)
    })
  }
  const handleChange = (e) => {
    setSearchText(e.target.value)
  }

  const {hideHomeLink, buttonClass = 'normal'} = props

  return (
    <div className="search">
      {hideHomeLink ? null :
        <a className="home-link" href="/">Home</a>
      }

      <form id="search-form" className="search-form form" onSubmit={handleSubmit} >
        <input className="input __text" onChange={handleChange}/>
        <input className={`input __submit ${buttonClass}`} type="submit" value="search"/>
      </form>
    </div>
  )

}
export default Search