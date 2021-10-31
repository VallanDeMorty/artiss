import axios, { AxiosResponse } from "axios";
import { camelizeKeys } from "humps";

export const Api = axios.create({
  baseURL: "https://www.artstation.com/",
});

Api.interceptors.response.use((response: AxiosResponse<any>) => {
  if (
    response.data &&
    response.headers["content-type"] === "application/json"
  ) {
    response.data = camelizeKeys(response.data);
  }

  return response;
});
