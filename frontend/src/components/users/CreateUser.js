import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class CreateUser extends Component {
  render() {
    const { isAuthenticated } = this.props.users;
    if (!isAuthenticated) return <Redirect to="/signin" />;

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Create new admin user</legend>
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

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(CreateUser);
