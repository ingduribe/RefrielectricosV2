import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import store from "../store";

class Register extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Sign Up System</legend>
          <input
            type="text"
            name="categoryName"
            placeholder="First Name"
            autoFocus
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="LastName"
            placeholder="Last Name"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="LastName"
            placeholder="Username Login"
            onChange={this.handleChange}
          />
          <br />
          <input
            type="password"
            name="LastName"
            placeholder="Password Login"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Sign Up" />
        </fieldset>
      </form>
    );
  }
}

const mapDispathToProps = dispatch => {
  return {};
};

export default connect(
  null,
  mapDispathToProps
)(Register);
