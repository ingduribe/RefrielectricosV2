import React, { Component } from "react";
import {} from "react-redux";

import Navbar from "./components/Navbar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Categories from "./components/Categories";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Categories} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
