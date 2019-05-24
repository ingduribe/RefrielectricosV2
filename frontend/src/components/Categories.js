import React, { Component } from "react";
import ListCategories from "./ListCategories";
import CreateCategory from "./CreateCategory";
import { connect } from "react-redux";
import { categoriesActions } from "../store/actions";
import store from "../store";

class Categories extends Component {
  saveCategory = newCategory => {
    this.props.createCategory(newCategory);
  };

  render() {
    const { categories } = this.props;
    return (
      <div>
        <CreateCategory saveCategory={this.saveCategory.bind(this)} />
        <ListCategories categories={categories} />
      </div>
    );
  }
}

store.dispatch(categoriesActions.getAllCategories(dispatchEvent));

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
};

const mapDispathToProps = dispatch => {
  return {
    createCategory: newCategory =>
      dispatch(categoriesActions.createCategory(newCategory)),
    getAllCategories: () => dispatch(categoriesActions.getAllCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Categories);
