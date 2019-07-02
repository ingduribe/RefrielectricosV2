import { GET_PRODUCTS } from "../../actions/types";

const productsReducer = (state = [], { type, payload = {} }) => {
  switch (type) {
    case GET_PRODUCTS:
      return payload;

    default:
      return [...state];
  }
};

export default productsReducer;
