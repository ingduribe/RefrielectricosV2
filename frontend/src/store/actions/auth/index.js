import axios from "axios";
import { LOGIN } from "../types";
import keys from "../../../keys/";

const login = user => async dispatch => {
  const responseAuth = await axios.post(`${keys.api}/users/signin`, user);
  let actionAuth = {
    type: LOGIN,
    payload: responseAuth
  };
  return dispatch(actionAuth);
};

export default { login };
