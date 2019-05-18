import { SAVE_CATEGORY, GET_CATEGORIES } from "./types";
import axios from "axios";
import keys from "./../../keys/";

export function createCategory(category) {
  return {
    type: SAVE_CATEGORY,
    payload: category
  };
}

export function getCategories(categories) {
  return {
    type: GET_CATEGORIES,
    payload: categories
  };
}

export function getAllCategories() {
  return async dispatch => {
    const categories = await axios.get(`${keys.api}/categories`);
    return dispatch(getCategories(categories.data));
  };
}
