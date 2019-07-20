import { SET_CURRENT_USER } from "../../actions/types";

const initialState = {
  isAuthenticated: false,
  auth: {},
};

const authReducer = (state = initialState, { type, user }) => {
  switch (type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: user ? true : false,
        auth: user
      };

    default:
      return { ...state };
  }
};

export default authReducer;
