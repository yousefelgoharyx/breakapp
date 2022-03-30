import {useState} from "react";
import {useAuth} from "../context/auth";
import instance from "../utils/axiosAuth";
let defaultOptions = {
  headers: {
    "Content-Type": "application/json",
  },
};

const useMethod = (method, options = defaultOptions) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const {user} = useAuth();
  const post = async (url, data) => {
    setLoading(true);
    setError(false);
    return new Promise(async (resolve, reject) => {
      try {
        const res = await instance(user.token)[method](url, data, options);
        setData(res.data);
        setLoading(false);
        setError(false);
        resolve(res.data);
      } catch (error) {
        setData(null);
        setLoading(false);
        setError(true);
        reject(error);
      }
    });
  };

  return {post, loading, error, data};
};

export default useMethod;
