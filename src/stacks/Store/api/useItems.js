import {useQuery} from "react-query";
import useAxios from "../../../hooks/useAxios";

const useItems = (id, currentPage) => {
  const axios = useAxios();
  const fetch = async (page = 1) => {
    const response = await axios.get(
      `/store/getCategoryProducts/${id}?page=${page}`,
    );
    return response.data;
  };
  return useQuery(["items", id, currentPage], () => fetch(currentPage), {
    keepPreviousData: true,
    staleTime: 2 * 60 * 60 * 1000,
  });
};

export default useItems;
