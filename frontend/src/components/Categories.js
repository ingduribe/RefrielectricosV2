import React, { Component } from "react";
import ListCategories from "./ListCategories";
import CreateCategory from "./CreateCategory";
import { connect } from "react-redux";
import * as actions from "../store/actions";

class Categories extends Component {
  saveCategory = newCategory => {
    this.props.createCategory(newCategory);
  };

  render() {
    return (
      <div>
        <CreateCategory saveCategory={this.saveCategory.bind(this)} />
        <ListCategories />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    state
  };
};

const mapDispathToProps = dispatch => {
  return {
    createCategory: newCategory => dispatch(actions.createCategory(newCategory))
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Categories);
