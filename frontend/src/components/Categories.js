import React, { Component } from "react";
import ListCategories from "./ListCategories";
import CreateCategory from "./CreateCategory";

class Categories extends Component {
  render() {
    return (
      <div>
        <CreateCategory />
        <ListCategories />
      </div>
    );
  }
}

export default Categories;
