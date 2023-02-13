import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

axios.interceptors.request.use((config: AxiosRequestConfig) => {
  if (!config) return;
  config.headers = {
    Authorization: localStorage.getItem("token") ?? "401",
    "Content-type": "application/json",
  };
  return config;
});

axios.interceptors.response.use(
  (res: AxiosResponse) => {
    return res.data;
  },
  (error) => {
    if (error && error.response && error.response.status) {
      switch (error.response.status) {
        case 401:
          throw new Error("身份认证失败，请检查权限");
        case 404:
          throw new Error("无资源");
        case 500:
          throw new Error("内部错误");
        default:
          throw new Error("请求失败");
      }
    }
  }
);
