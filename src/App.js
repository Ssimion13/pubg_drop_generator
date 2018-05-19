import React, { Component } from 'react';
import Navbar from "./Navbar.js"
import {Switch, Route} from "react-router-dom";
import FrontPage from "./FrontPage.js";
import Generator from "./Generator/Generator.js";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Navbar />
      <Switch>
        <Route path="/Generator" component={Generator} />
        <Route path="/" component={FrontPage} />
      </Switch>
      </div>
    );
  }
}

export default App;
