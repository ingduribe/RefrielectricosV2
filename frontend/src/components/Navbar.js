import React from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authActions } from "../store/actions";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import MenuItem from "@material-ui/core/MenuItem";

class Navbar extends React.Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };
  render() {
    const { isAuthenticated } = this.props.users;

    const isAuthLinks = (
      <MenuItem>
        <NavLink to="/signin" onClick={this.logout.bind(this)}>
          Logout
        </NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/storage">Storage</NavLink>
      </MenuItem>
    );

    const isNotAuthLinks = (
      <MenuItem>
        <NavLink exact to="/signin">
          Sign In
        </NavLink>
      </MenuItem>
    );

    return (
      <AppBar color="default" position="static">
        <Toolbar>
          <MenuItem>Refri - Admin</MenuItem>

          {isAuthenticated ? isAuthLinks : isNotAuthLinks}
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  users: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispathToProps = dispatch => {
  return {
    logout: () => dispatch(authActions.loguot())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispathToProps
  )(Navbar)
);
