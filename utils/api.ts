import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// instance 생성
const instance = axios.create({
  baseURL: "api",

  //설정에서 ip찾아서 하기
  headers: { "Access-Control-Allow-Origin": "*" },
  withCredentials: true,
  timeout: 100000,
});

// response interceptor
const responseInterceptorFulfilled = (res: AxiosResponse) => {
  if (res.status >= 200 && res.status < 300) {
    return res.data;
  }

  return Promise.reject(...res.data);
};

const responseInterceptorRejected = (error: AxiosError | any) => {
  const errorMsg = error.response?.data?.message ?? "에러입니다";
  alert(errorMsg);
};

instance.interceptors.response.use(
  responseInterceptorFulfilled,
  responseInterceptorRejected
);

export const get = <T>(...args: Parameters<typeof instance.get>) => {
  return instance.get<T, T>(...args);
};

export const post = <T>(...args: Parameters<typeof instance.post>) => {
  return instance.post<T, T>(...args);
};

export const patch = <T>(...args: Parameters<typeof instance.patch>) => {
  return instance.patch<T, T>(...args);
};

export const del = <T>(...args: Parameters<typeof instance.delete>) => {
  return instance.delete<T, T>(...args);
};
