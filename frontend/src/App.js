import React, { Component } from "react";
import { connect } from "react-redux";
import setAuthorizationToken from "./utils/setAuthorizationToken";

import { authActions } from "./store/actions";

import NavbarHome from "./components/NavbarHome";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Categories from "./components/Categories";
import store from "./store";
import jwt from "jsonwebtoken";

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

if (localStorage.token) {
  setAuthorizationToken(localStorage.token);
  store.dispatch(authActions.setCurrentUser(jwt.decode(localStorage.token)));
}

const mapDispathToProps = dispatch => {
  return {
    setCurrentUser: () =>
      dispatch(authActions.setCurrentUser(jwt.decode(localStorage.token)))
  };
};
export default connect(
  null,
  null
)(App);
