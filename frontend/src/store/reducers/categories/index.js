import { GET_CATEGORIES } from "../../actions/types";
import { SAVE_CATEGORY } from "../../actions/types";

const categoriesReducer = (state = [], { type, payload = {} }) => {
  switch (type) {
    case GET_CATEGORIES:
      return [...state, ...payload];

    case SAVE_CATEGORY:
      return [...state, payload.data];

    default:
      return [...state];
  }
};

export default categoriesReducer;
