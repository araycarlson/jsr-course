import React, {useState} from 'react';
import Search from './components/search.js'
import GifList from './components/list.js'
import './App.css';

const App = props => { 
  const [gifs, setGifs] = useState()
  const updateParentState = gifs => {
    setGifs(gifs)
  }
  return (
    <div className="App">
      <Search 
        hideHomeLink={true}
        buttonClass="__large"
        updateParentState={updateParentState}/> 
  
      <GifList gifs={gifs}/>
    </div> 
  )
}


export default App;