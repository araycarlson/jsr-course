import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './pages/home.js'
import Result from './pages/result.js'
import './App.css';

const App = props => { 
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            exact 
            path="/"
            component={Home}
          />
          <Route 
            path="/:searchText"
            component={Result}
          />
        </Switch>
      </Router>
    </div>
  )
}

export default App;