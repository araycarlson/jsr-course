import React from 'react'

const ClickableArticleLink = (props) => {
  console.log(props)
  return (
    <div>
     <a href={props.link}>{props.title}</a>
    </div>
  )
}

export default ClickableArticleLink