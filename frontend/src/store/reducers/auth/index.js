import { SET_CURRENT_USER } from "../../actions/types";

const initialState = {
  isAuthenticated: false,
  userLoged: {}
};

const authReducer = (state = initialState, { type, user }) => {
  switch (type) {
    case SET_CURRENT_USER:
      console.log(type, user);
      return {
        isAuthenticated: user ? true : false,
        userLoged: user
      };

    default:
      return [...state];
  }
};

export default authReducer;
