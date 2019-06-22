import React, { Component } from "react";
import { connect } from "react-redux";
import ListProducts from "./ListProducts";
import { Redirect } from "react-router-dom";
import { productsActions } from "../../store/actions";

class Products extends Component {
  componentDidMount() {
    if (!this.props.products.length) this.props.getAllProducts();
  }

  render() {
    const { isAuthenticated } = this.props.users;
    const { products } = this.props;

    if (!isAuthenticated) return <Redirect to="/signin" />;

    return (
      <div>
        <ListProducts products={products} />
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(productsActions.getAllProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
