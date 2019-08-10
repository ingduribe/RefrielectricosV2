import {
  GET_PRODUCTS,
  CHANGE_STATUS_PRODUCT,
  ASSIGN_IMAGE_TO_PRODUCT
} from "../../actions/types";

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

    case ASSIGN_IMAGE_TO_PRODUCT:
      let { extension, fileName, description, imageUrl, productId } = payload;
      state.map(product => {
        if (product.id === productId) {
          product.extension = extension;
          product.fileName = fileName;
          product.description = description;
          product.imageUrl = imageUrl;
          console.log(product);
        }
      });
      return state;

    default:
      return [...state];
  }
};

export default productsReducer;
