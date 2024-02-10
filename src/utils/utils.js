import { RESPONSE_OK } from "../constants/appConstants";

export const convertObjToQueryString = (obj) => {
  return "?" + new URLSearchParams(obj).toString();
};

export const checkSuccessResponse = (res) => {
  return res.status === RESPONSE_OK;
};
