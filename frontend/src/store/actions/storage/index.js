import axios from "axios";
import { GET_STORAGE, CHANGE_STATUS_SOURCE } from "../types";
import keys from "../../../keys/";

const getSotrage = storage => {
  return {
    type: GET_STORAGE,
    payload: storage
  };
};

const changeSourceStatus = sourceUpdated => {
  return {
    type: CHANGE_STATUS_SOURCE,
    payload: sourceUpdated
  };
};

const getAllStorage = () => async dispatch => {
  const storage = await axios.get(`${keys.api}/storage/all`);
  for (const source of storage.data) {
    let imageResponse = await fetch(
      `${keys.api}/storage/file/uuid/${source.uuidCode}`
    );
    let imageBlob = await imageResponse.blob();
    let imageUrl = URL.createObjectURL(imageBlob);
    source.image = imageUrl;
  }
  return dispatch(getSotrage(storage.data));
};

const changeStatus = (status, uuidCode) => async dispatch => {
  let response = await axios.put(
    `${keys.api}/storage/changeStatus/${uuidCode}`,
    {
      active: !status
    }
  );

  if (response.data === "Status changed")
    return dispatch(changeSourceStatus({ uuidCode, status }));
};

export default { getAllStorage, changeStatus };
