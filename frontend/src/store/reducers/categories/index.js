import { GET_CATEGORIES, SAVE_CATEGORY } from "../../actions/types";

const categoriesReducer = (state = [], { type, payload = {} }) => {
  switch (type) {
    case GET_CATEGORIES:
      return payload;

    case SAVE_CATEGORY:
      return [...state, payload.data];

    default:
      return [...state];
  }
};

export default categoriesReducer;
