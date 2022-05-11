import axios from "axios";
import {useCallback, useMemo} from "react";
import {useAuth} from "../context/auth";
// Set config defaults when creating the instance
const axiosInstance = token => {
  return axios.create({
    baseURL: "https://break-app-123.herokuapp.com/api/v1",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

const useAxios = () => {
  const {user, logout} = useAuth();

  const instance = useMemo(() => axiosInstance(user.token), []);

  const createAxiosMiddleWare = useCallback(() => {
    const interceptor = instance.interceptors.response.use(
      response => response,
      error => {
        if (error.response.status !== 401) return Promise.reject(error);
        instance.interceptors.response.eject(interceptor);
        return logout();
      },
    );
  });
  useMemo(() => createAxiosMiddleWare(), []);
  return instance;
};

export default useAxios;
