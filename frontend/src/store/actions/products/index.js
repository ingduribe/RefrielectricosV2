import axios from "axios";
import { GET_PRODUCTS } from "../types";
import keys from "../../../keys/";

const getProducts = products => {
  return {
    type: GET_PRODUCTS,
    payload: products
  };
};

const getAllProducts = () => async dispatch => {
  const products = await axios.get(`${keys.api}/products/all`);
  for (const product of products.data) {
    let imageInfo = await axios.get(`${keys.api}/storage/${product.id}`);
    if (imageInfo.data) {
      let imageResponse = await fetch(`${keys.api}/storage/file/${product.id}`);
      let imageBlob = await imageResponse.blob();
      let imageUrl = URL.createObjectURL(imageBlob);

      let { extension, fileName, description } = imageInfo.data;
      product.extension = extension;
      product.fileName = fileName;
      product.description = description;
      product.image = imageUrl;
    }
  }
  return dispatch(getProducts(products.data));
};

export default { getAllProducts };
