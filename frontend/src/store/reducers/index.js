import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import authReducer from "./auth";
import productsReducer from "./products";
import storageReducer from "./storage";

export default combineReducers({
  categories: categoriesReducer,
  users: authReducer,
  products: productsReducer,
  storage: storageReducer
});
