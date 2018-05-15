import React, { Component } from 'react';
import Navbar from "./Navbar.js"
import { MuiThemeProvider } from 'material-ui/styles';
import {Switch, Route} from "react-router-dom";
import FrontPage from "./FrontPage.js";
import Generator from "./Generator.js"

class App extends Component {
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
      <Navbar />
      </MuiThemeProvider>
      <MuiThemeProvider>
      <Switch>
        <Route path="/Generator" component={Generator} />
        <Route path="/" component={FrontPage} />
      </Switch>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
