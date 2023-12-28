import axios from "axios";
axios.defaults.withCredentials = true;

axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem("authToken");
  config.headers.Authorization = token ? `Bearer ${token}` : ``;
  return config;
});
export default axios.create({
  // base url of laravel api

  // baseURL: "https://static.cpc.daffodilvarsity.edu.bd/api",
  baseURL: "https://static.cpc.daffodilvarsity.edu.bd/api",
  headers: {
    "content-type": "application/json",
  },
});
