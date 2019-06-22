import React, { Component } from "react";
import ListCategories from "./ListCategories";
import CreateCategory from "./CreateCategory";
import { connect } from "react-redux";
import { categoriesActions } from "../../store/actions";
import { Redirect } from "react-router-dom";

class Categories extends Component {
  saveCategory = newCategory => {
    this.props.createCategory(newCategory);
  };

  changeStatus = (status, id) => {
    this.props.changeCategoryStatus(status, id);
  };
  componentDidMount() {
    if (!this.props.categories.length) this.props.getActiveCategories();
  }

  render() {
    const { categories } = this.props;
    const { isAuthenticated } = this.props.users;

    if (!isAuthenticated) return <Redirect to="/signin" />;

    return (
      <div>
        <CreateCategory saveCategory={this.saveCategory.bind(this)} />
        <hr />
        <ListCategories
          categories={categories}
          changeStatus={this.changeStatus.bind(this)}
        />
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
    getActiveCategories: () =>
      dispatch(categoriesActions.getActiveCategories()),
    changeCategoryStatus: (status, id) =>
      dispatch(categoriesActions.changeStatus(status, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(Categories);
