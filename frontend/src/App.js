import React, { Component } from "react";
import {} from "react-redux";

import NavbarHome from "./components/NavbarHome";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Categories from "./components/Categories";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <NavbarHome />
          <Categories />

          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/signin" component={Login} />
            <Route exact path="/signup" component={Register} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
