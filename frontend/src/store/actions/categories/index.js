import axios from "axios";
import { SAVE_CATEGORY, GET_CATEGORIES } from "../types";
import keys from "../../../keys/";

const getCategories = categories => {
  return {
    type: GET_CATEGORIES,
    payload: categories
  };
};

const saveCategory = newCategory => {
  return {
    type: SAVE_CATEGORY,
    payload: newCategory
  };
};

const createCategory = category => async dispatch => {
  const categoryCreated = await axios.post(`${keys.api}/categories`, category);
  return dispatch(saveCategory(categoryCreated));
};

const getActiveCategories = () => async dispatch => {
  const categories = await axios.get(`${keys.api}/categories/all`);
  return dispatch(getCategories(categories.data));
};

export default { createCategory, getActiveCategories };
