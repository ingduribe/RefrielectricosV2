import { GET_CATEGORIES } from "../actions/types";
import { SAVE_CATEGORY } from "../actions/types";

export default (state = [], { type, payload }) => {
  switch (type) {
    case GET_CATEGORIES:
      return [...state, ...payload];

    default:
      return [...state];
  }
};
