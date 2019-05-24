import React, { Component } from "react";
import { connect } from "react-redux";
import { authActions } from "../store/actions";
import store from "../store";

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    let user = {
      usernameLogin: this.refs.usernameLogin.value,
      passwordLogin: this.refs.passwordLogin.value
    };
    this.props.login(user);
    this.refs.usernameLogin.value = "";
    this.refs.passwordLogin.value = "";
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <legend>Login System</legend>
          <input
            type="text"
            placeholder="Username"
            autoFocus
            ref={"usernameLogin"}
          />
          <br />
          <input type="password" placeholder="Password" ref={"passwordLogin"} />
          <br />
          <input type="submit" value="Sign In" />
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
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
