//pages/home.js
import React, { useState, useEffect } from "react"
import Search from "../components/search"
import { getSearchResults } from "../api"
import { Link } from "react-router-dom"

const Home = props => {
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    getSearchResults().then(results => {
      setSearchResults(results)
    })
  }, [])
  return (
    <div className="page home">
      <Search
        hideHomeLink={true}
        buttonClass="__large"
      />
      <ul className="search-list">
        {searchResults.map(result => {
          return (
            <li className="js-search-result" key={result.id}>
              <Link to={`/${result.text}`}>
                {result.text} - {result.date}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Home
