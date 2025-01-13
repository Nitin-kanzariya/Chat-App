import axios from "axios";
import config from "../config";

export const axiosInstance = axios.create({
  baseURL: config.BACKEND_API + "/api",
  withCredentials: true,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
