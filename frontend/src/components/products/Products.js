import React, { Component } from "react";
import { connect } from "react-redux";
import ListProducts from "./ListProducts";
import { Redirect } from "react-router-dom";
import { productsActions, storageActions } from "../../store/actions";
import { Container } from "semantic-ui-react";

class Products extends Component {
  componentDidMount() {
    if (!this.props.products.length) this.props.getAllProducts();
    if (!this.props.storage.length) this.props.getAllStorage();
  }

  changeProductStatus = (status, uuidCode) => {
    this.props.changeProductsStatus(status, uuidCode);
  };

  render() {
    const { isAuthenticated } = this.props.users;
    const { products, storage } = this.props;

    if (!isAuthenticated) return <Redirect to="/signin" />;

    return (
      <Container>
        <ListProducts
          products={products}
          storage={storage}
          changeProductStatus={this.changeProductStatus.bind(this)}
        />
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    users: state.users,
    products: state.products,
    storage: state.storage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getAllProducts: () => dispatch(productsActions.getAllProducts()),
    changeProductsStatus: (status, id) =>
      dispatch(productsActions.changeStatus(status, id)),
    getAllStorage: () => dispatch(storageActions.getAllStorage())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
