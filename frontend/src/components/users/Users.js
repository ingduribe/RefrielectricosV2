import React, { Component } from "react";
import CreateUser from "./CreateUser";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Users extends Component {
  render() {
    const { users } = this.props;
    const { isAuthenticated } = this.props.users;

    if (!isAuthenticated) return <Redirect to="/signin" />;

    return (
      <div>
        <CreateUser />
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

const mapDispathToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps)(Users);
