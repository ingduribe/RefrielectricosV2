import React, { Component } from "react";
import { connect } from "react-redux";
import { authActions } from "../store/actions";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      usernameLogin: "",
      passwordLogin: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.login(this.state);
    this.setState({
      usernameLogin: "",
      passwordLogin: ""
    });
  };

  render() {
    const { isAuthenticated } = this.props.users;

    if (isAuthenticated) return <Redirect to="/categories" />;
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <legend>Login System</legend>
          <input
            type="text"
            placeholder="Username"
            name="usernameLogin"
            autoFocus
            onChange={this.handleChange}
          />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="passwordLogin"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Sign In" />
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispathToProps = dispatch => {
  return {
    login: state => dispatch(authActions.login(state))
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Login);
