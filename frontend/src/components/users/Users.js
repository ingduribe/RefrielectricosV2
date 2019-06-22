import React, { Component } from "react";
import CreateUser from "./CreateUser";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Users extends Component {
  render() {
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

export default connect(mapStateToProps)(Users);
