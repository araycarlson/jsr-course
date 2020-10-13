import React, {useState} from 'react'
import './search.css'
import {withRouter} from 'react-router'
import {createSearch} from '../api'

const Search = props => {
  const [searchText, setSearchText] = useState()
  const handleSubmit = e => {
    e.preventDefault()
    createSearch(searchText).then(r => {
      props.history.push({
        pathname: `/${searchText}`
      })
    })
  }
  
  const handleChange = (e) => {
    setSearchText(e.target.value)
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
      </form>
    </div>
  )
}

export default withRouter(Search)