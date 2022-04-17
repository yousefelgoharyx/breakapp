import axios from "axios";
import {useCallback} from "react";
import {useAuth} from "../context/auth";
// Set config defaults when creating the instance
const instance = token => {
  return axios.create({
    baseURL: "https://break-app-123.herokuapp.com/api/v1",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// Alter defaults after instance has been created
const useAxios = () => {
  const {user} = useAuth();

  return instance(user.token);
};

export default useAxios;
