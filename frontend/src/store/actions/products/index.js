import axios from "axios";
import {
  GET_PRODUCTS,
  CHANGE_STATUS_PRODUCT,
  ASSIGN_IMAGE_TO_PRODUCT
} from "../types";
import keys from "../../../keys/";

const getProducts = products => {
  return {
    type: GET_PRODUCTS,
    payload: products
  };
};

const changeProductStatus = productUpdated => {
  return {
    type: CHANGE_STATUS_PRODUCT,
    payload: productUpdated
  };
};

const addImageToProduct = newProductInfo => {
  return {
    type: ASSIGN_IMAGE_TO_PRODUCT,
    payload: newProductInfo
  };
};

const assignImageToProduct = (
  productId,
  sourceUuidCode,
  image
) => async dispatch => {
  const response = await axios.put(
    `${keys.api}/storage/asignProductToImage/${sourceUuidCode}`,
    { idProduct: productId }
  );

  if (response.status === 200) {
    // return dispatch(addImageToProduct({ productId, image }));
    let imageInfo = await axios.get(`${keys.api}/storage/${productId}`);

    if (imageInfo.data) {
      let imageResponse = await fetch(`${keys.api}/storage/file/${productId}`);
      let imageBlob = await imageResponse.blob();
      let imageUrl = URL.createObjectURL(imageBlob);
      let { extension, fileName, description } = imageInfo.data;
      let newProductInfo = { extension, fileName, description, imageUrl };

      return dispatch(addImageToProduct(newProductInfo));
    }
  }
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

const changeStatus = (status, id) => async dispatch => {
  let response = await axios.put(`${keys.api}/products/changeStatus/${id}`, {
    active: !status
  });

  if (response.data === "Status changed") {
    return dispatch(changeProductStatus({ id, status }));
  }
};

export default { getAllProducts, changeStatus, assignImageToProduct };
