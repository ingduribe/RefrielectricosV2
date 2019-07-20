import React from "react";
import PropTypes from "prop-types";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { authActions } from "../store/actions";
import { Header, Icon, Menu } from "semantic-ui-react";

class Navbar extends React.Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };
  render() {
    const { isAuthenticated } = this.props.users;

    const isAuthLinks = (
      <Menu>
        <Menu.Item>
          <NavLink to="/signin" onClick={this.logout.bind(this)}>
            Logout
          </NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/users">Users</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/categories">Categories</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/products">Products</NavLink>
        </Menu.Item>
        <Menu.Item>
          <NavLink to="/storage">Storage</NavLink>
        </Menu.Item>
      </Menu>
    );

    const isNotAuthLinks = (
      <Menu>
        <Menu.Item>
          <NavLink exact to="/signin">
            Sign In
          </NavLink>
        </Menu.Item>
      </Menu>
    );

    return (
      <Header as="h2">
        <Icon name="settings" />
        <Header.Content>
          RefriElectricos
          <Header.Subheader>Mannage your data</Header.Subheader>
        </Header.Content>
        {isAuthenticated ? isAuthLinks : isNotAuthLinks}
      </Header>
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
