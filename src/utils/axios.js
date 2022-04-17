import axios from "axios";
import {auth_token} from "../context/auth";

const instance = axios.create({
  baseURL: "https://break-app-123.herokuapp.com/api/v1",
  headers: {
    Authorization: "Bearer " + auth_token,
  },
});

export default instance;
