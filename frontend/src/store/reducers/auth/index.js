import { LOGIN } from "../../actions/types";

const authReducer = (state = [], { type, payload }) => {
  switch (type) {
    case LOGIN:
      console.log(state);
      return [...state, ...payload];

    default:
      return [...state];
  }
};

export default authReducer;
