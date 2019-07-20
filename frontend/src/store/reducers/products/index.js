import { GET_PRODUCTS, CHANGE_STATUS_PRODUCT } from "../../actions/types";
import products from "../../actions/products";

const productsReducer = (state = [], { type, payload = {} }) => {
  switch (type) {
    case GET_PRODUCTS:
      return payload;

    case CHANGE_STATUS_PRODUCT:
      let { status } = payload;
      state.map(products => {
        if (products.id === payload.id) products.active = !status;
      });

      return state;

    default:
      return [...state];
  }
};

export default productsReducer;
