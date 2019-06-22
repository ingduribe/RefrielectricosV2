import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import authReducer from "./auth";
import productsReducer from "./products";

export default combineReducers({
  categories: categoriesReducer,
  users: authReducer,
  products: productsReducer
});
