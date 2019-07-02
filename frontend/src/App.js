import React, { Component } from "react";
import setAuthorizationToken from "./utils/setAuthorizationToken";
import { authActions } from "./store/actions";
import Navbar from "./components/Navbar";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Login from "./components/Login";
import Users from "./components/users/Users";
import Products from "./components/products/Products";
import Categories from "./components/categories/Categories";
import Storage from "./components/storage/Storage";
import store from "./store";
import jwt from "jsonwebtoken";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Container from "@material-ui/core/Container";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Container>
          <Navbar />
          <Switch>
            <Route path="/signin" component={Login} />
            <Route path="/users" component={Users} />
            <Route path="/categories" component={Categories} />
            <Route path="/products" component={Products} />
            <Route path="/storage" component={Storage} />
          </Switch>
        </Container>
      </BrowserRouter>
    );
  }
}

if (localStorage.token) {
  const token = localStorage.token;
  setAuthorizationToken(token);
  const userInfo = jwt.decode(token);
  const { username, rol } = userInfo;
  const user = { username, rol };
  store.dispatch(authActions.setCurrentUser(user));
}

App.propTypes = {
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(App);
