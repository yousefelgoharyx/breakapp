import {useEffect, useState} from "react";
import {useAuth} from "../context/auth";
import instance from "../utils/axiosAuth";

const useGet = (url, callback = () => {}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);
  const [c, setC] = useState(0);
  const {user} = useAuth();

  const isReady = !loading && !error && data;
  const fetch = async () => {
    setError(false);
    try {
      const res = await instance(user.token).get(url);
      setData(res.data);
      setLoading(false);
      setError(false);
      callback(res.data);
    } catch (error) {
      console.log(error);
      setData();
      setLoading(false);
      setError(true);
    }
  };

  const reload = () => setC(c + 1);

  const backgroundReload = fetch;
  useEffect(() => {
    setLoading(true);
    fetch();
  }, [c]);

  return {reload, loading, error, data, backgroundReload, isReady};
};

export default useGet;
