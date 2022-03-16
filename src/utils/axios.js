import axios from "axios";

const instance = axios.create({
  baseURL: "https://break-app-123.herokuapp.com/api/v1",
});

export default instance;
