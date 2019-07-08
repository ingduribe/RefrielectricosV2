import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { storageActions } from "../../store/actions";
import ListStorage from "./ListStorage";

class Storage extends Component {
  componentDidMount() {
    if (!this.props.storage.length) this.props.getAllStorage();
  }

  changeSourceStatus = (status, uuidCode) => {
    this.props.changeSourceStatus(status, uuidCode);
  };

  render() {
    const { isAuthenticated } = this.props.users;
    const { storage } = this.props;

    if (!isAuthenticated) return <Redirect to="/signin" />;

    return (
      <div>
        <ListStorage
          storage={storage}
          changeSourceStatus={this.changeSourceStatus.bind(this)}
        />
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    storage: state.storage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllStorage: () => dispatch(storageActions.getAllStorage()),
    changeSourceStatus: (status, uuidCode) =>
      dispatch(storageActions.changeStatus(status, uuidCode))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Storage);
