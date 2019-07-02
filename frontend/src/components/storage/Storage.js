import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

class Storage extends Component {
  render() {
    const { isAuthenticated } = this.props.users;
    const { storage } = this.props;

    if (!isAuthenticated) return <Redirect to="/signin" />;

    return (
      <div>
        Storage Works
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

export default connect(mapStateToProps)(Storage);
