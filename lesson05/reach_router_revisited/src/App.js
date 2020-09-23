import React from 'react';
import { Router } from "@reach/router";

import "./App.css";

import FruitList from './FruitList';
import About from './About';
import Nav from "./Nav";
import ShowStuff from "./ShowStuff";

function App(props) {
  return (
    <div className="background-yellow">
      <Nav /> {/* <Nav> is not a target for routing, so we put it outside of <Router>*/}
      <Router>
        <FruitList path="/"></FruitList>
        <FruitList path="/secret-list"></FruitList>
        <About path="/about"></About>

        {/* ':name' will turn into this.props.name inside the component */}
        {/* Browser address bar will show: http://localhost:3000/stuff/some-name */}
        <ShowStuff path="/stuff/:name"></ShowStuff>
      </Router>
    </div>
  );
}

export default App;
