import axios from "axios";
import Cookies from "js-cookie";
import config from "../config/index.js";

export const axiosInstance = axios.create({
  baseURL: config.BACKEND_API + "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = Cookies.get("jwt");
    if (token) {
      config.headers.Token = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
