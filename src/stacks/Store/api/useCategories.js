import {useQuery} from "react-query";
import useAxios from "../../../hooks/useAxios";

const useCategories = () => {
  const axios = useAxios();
  const fetch = async () => {
    const response = await axios.get(`/store/allCategories`);
    return response.data;
  };
  return useQuery("categories", fetch);
};

export default useCategories;
