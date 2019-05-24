import { combineReducers } from "redux";
import categoriesReducer from "./categories";
import authReducer from "./auth";

export default combineReducers({
  categories: categoriesReducer,
  users: authReducer
});
