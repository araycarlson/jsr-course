import React from 'react'
import '../styles/search.css'
import ClickableArticleLink from './test'
const Footer = () => {
  return (
    <div className="Footer">
        IM A GIANT Footer BOX
      <a className="home-link" href="/">Home</a>
      <form action="/" method="post" id="Footer-form" className="Footer-form form" >
        <input className="input __text" type="text" id="Footer" name="Footer"/>
        <input className="input __submit" type="submit" value="Footer"/>
      </form>
             {/* {stuff.map(x<ClickableArticleLink link=x.link title="x.title />) }{ */}
        <ClickableArticleLink link="reddit.com" title="twoasdasdas" />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  )
}

export default Footer