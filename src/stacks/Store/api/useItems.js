import {useQuery} from "react-query";
import useAxios from "../../../hooks/useAxios";

const useItems = id => {
  const axios = useAxios();
  const fetch = async () => {
    const response = await axios.get(`/store/getCategoryProducts/${id}?page=1`);
    return response.data;
  };
  return useQuery(["items", id], fetch);
};

export default useItems;
