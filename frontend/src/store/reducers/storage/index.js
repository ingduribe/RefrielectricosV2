import { GET_STORAGE, CHANGE_STATUS_SOURCE } from "../../actions/types";
import { stat } from "fs";

const storageReducer = (state = [], { type, payload = {} }) => {
  switch (type) {
    case GET_STORAGE:
      return payload;

    case CHANGE_STATUS_SOURCE:
      let { status } = payload;
      state.map(source => {
        if (source.uuidCode === payload.uuidCode) source.active = !status;
      });

      return state;
    default:
      return [...state];
  }
};

export default storageReducer;
