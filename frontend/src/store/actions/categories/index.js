import axios from "axios";
import { SAVE_CATEGORY, GET_CATEGORIES } from "../types";
import keys from "../../../keys/";

const createCategory = category => {
  return {
    type: SAVE_CATEGORY,
    payload: category
  };
};

const getAllCategories = () => async dispatch => {
  const categories = await axios.get(`${keys.api}/categories`);

  let actionGetCategories = {
    type: GET_CATEGORIES,
    payload: categories.data
  };
  return dispatch(actionGetCategories);
};

export default { createCategory, getAllCategories };
