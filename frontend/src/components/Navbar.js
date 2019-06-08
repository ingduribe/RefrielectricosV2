import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authActions } from "../store/actions";

class Navbar extends React.Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };
  render() {
    const { isAuthenticated } = this.props.users;

    const isAuthLinks = (
      <ul>
        <li>
          <NavLink exact to="/signin" onClick={this.logout.bind(this)}>
            Logout
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/users">
            Users
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/categories">
            Categories
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/products">
            Products
          </NavLink>
        </li>
      </ul>
    );

    const isNotAuthLinks = (
      <ul>
        <li>
          <NavLink exact to="/signin">
            Sign In
          </NavLink>
        </li>
      </ul>
    );

    return (
      <nav>
        <div>{isAuthenticated ? isAuthLinks : isNotAuthLinks}</div>
      </nav>
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
