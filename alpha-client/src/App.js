// import logo from './logo.svg';
// import './App.css';
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <Switch>
      <Route>
        <Home />
      </Route>
    </Switch>
  );
}

export default App;
