import React from "react";

export class categoriesList extends React.Component {
  changeCategoryStatus = (status, id) => {
    this.props.changeStatus(status, id);
  };

  render() {
    const { categories } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Category</th>
            <th>category description</th>
            <th>Last Updated</th>
            <th>Status</th>
            <th>Change status</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, i) => {
            return (
              <tr key={i}>
                <td>{category.name}</td>
                <td>{category.description}</td>
                <td>{category.updatedAt}</td>
                <td>{category.active ? <i>Active</i> : <i>Inactive</i>}</td>
                <td>
                  <button
                    onClick={() => {
                      this.changeCategoryStatus(category.active, category.id);
                    }}
                  >
                    Change status
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default categoriesList;
