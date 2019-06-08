import React, { Component } from "react";
import ListCategories from "./ListCategories";
import CreateCategory from "./CreateCategory";
import { connect } from "react-redux";
import { categoriesActions } from "../../store/actions";
import store from "../../store";
import { Redirect } from "react-router-dom";

class Categories extends Component {
  saveCategory = newCategory => {
    this.props.createCategory(newCategory);
  };
  componentDidMount() {
    if (!this.props.categories.length)
      store.dispatch(categoriesActions.getActiveCategories());
  }

  render() {
    const { categories } = this.props;
    const { isAuthenticated } = this.props.users;

    if (!isAuthenticated) return <Redirect to="/signin" />;

    return (
      <div>
        <CreateCategory saveCategory={this.saveCategory.bind(this)} />
        <hr />
        <ListCategories categories={categories} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories,
    users: state.users
  };
};

const mapDispathToProps = dispatch => {
  return {
    createCategory: newCategory =>
      dispatch(categoriesActions.createCategory(newCategory)),
    getActiveCategories: () => dispatch(categoriesActions.getActiveCategories())
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Categories);
