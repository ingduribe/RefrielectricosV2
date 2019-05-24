import { GET_CATEGORIES } from "../../actions/types";

const categoriesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case GET_CATEGORIES:
      return [...state, ...payload];

    default:
      return [...state];
  }
};

export default categoriesReducer;
