import { apiEndpoints } from "../constants/apiEndPoints";
import { API_METHOD_GET } from "../constants/appConstants";

export const GET_ALL_QUOTES_API = {
  url: apiEndpoints.ENDPOINT_GET_ALL_QUOTES,
  method: API_METHOD_GET,
  isMultipart: false,
  showToast: true,
  ToastMessages: "",
};

export const GET_SINGLE_RANDOM_QUOTE = {
  url: apiEndpoints.ENDPOINT_GET_RANDOM_QUOTES,
  method: API_METHOD_GET,
  isMultipart: false,
  showToast: true,
  ToastMessages: "",
};
