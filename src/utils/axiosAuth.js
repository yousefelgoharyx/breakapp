import axios from "axios";

const instance = token => {
  return axios.create({
    baseURL: "https://break-app-123.herokuapp.com/api/v1",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export default instance;
