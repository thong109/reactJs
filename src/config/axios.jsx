import axios from "axios";
import { ROUTERS } from "../utils/router";

const baseURL = import.meta.env.VITE_APP_API_URL
const timeout = +(import.meta.env.VITE_APP_API_TIMEOUT || 10000);

const axiosClient = axios.create({
  baseURL,
  timeout,
});

axiosClient.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${localStorage.getItem('userToken')}`;
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  // (error) => {
  //   return Promise.reject(error);
  // }
);

axiosClient.interceptors.response.use(
  (response) => {
    if(response.data) {
      return response.data;
    }
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      // navigate
      window.location.href = ROUTERS.ADMIN.LOGIN;
      // return Promise.reject(error);
      // return Promise.reject(new Error('Unauthorized'));

      return error;
    }
    throw error;
  }
);

export default axiosClient;
