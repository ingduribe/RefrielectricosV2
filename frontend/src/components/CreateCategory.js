import React from "react";

class CreateCategry extends React.Component {
  state = {
    categoryName: "",
    categoryDescription: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.saveCategory(this.state);
    this.setState({ categoryName: "", categoryDescription: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <legend>Create category</legend>
          <input
            type="text"
            name="categoryName"
            placeholder="Category name"
            autoFocus
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            name="categoryDescription"
            placeholder="Category description"
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="Save" />
        </fieldset>
      </form>
    );
  }
}

export default CreateCategry;
