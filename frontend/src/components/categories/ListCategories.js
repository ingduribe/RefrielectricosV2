import React from "react";

const categoriesList = ({ categories } = this.props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>category description</th>
          <th>Last Updated</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, i) => (
          <tr key={i}>
            <td>{category.name}</td>
            <td>{category.description}</td>
            <td>{category.updatedAt}</td>
            <td>{category.active ? <i>Active</i> : <i>Inactive</i>}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default categoriesList;
