import axios from "axios";
import { SET_CURRENT_USER } from "../types";
import keys from "../../../keys/";
import setAuthorizationToken from "../../../utils/setAuthorizationToken";
import jwt from "jsonwebtoken";

const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user
  };
};

const login = userLogin => async dispatch => {
  const responseAuth = await axios.post(`${keys.api}/users/signin`, userLogin);
  const { user } = responseAuth.data;
  let actionAuth = {};
  if (user) {
    const { token } = responseAuth.data.msg;
    localStorage.setItem("token", token);
    setAuthorizationToken(token);
    const userInfo = jwt.decode(token);
    const { username, rol } = userInfo;
    const user = { username, rol };
    return dispatch(setCurrentUser(user));
  }
};

export default { login, setCurrentUser };
