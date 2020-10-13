import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from "./Components/Navbar"
import './App.css';
import Dictionary from "./Pages/Dictionary"
import Todos from './Pages/Todos';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Dictionary}/>
        <Route exact path="/todo" component={Todos}/>
      </Switch>
    </div>
  );
}

export default App;
