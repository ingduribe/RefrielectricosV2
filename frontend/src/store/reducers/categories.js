import { SAVE_CATEGORY } from "../actions/types";

export default function(state = [], { type, payload }) {
  switch (type) {
    case SAVE_CATEGORY:
      return [...state, payload];
    default:
      return state;
  }
}
