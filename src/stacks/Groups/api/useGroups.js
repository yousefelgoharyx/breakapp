import {useQuery} from "react-query";
import useAxios from "../../../hooks/useAxios";

export const PER_PAGE = 10;
const useGroups = currentPage => {
  const axios = useAxios();
  const fetchRooms = async (page = 1) => {
    const response = await axios.get(
      `/agency/getAll?page=${page}&limit=${PER_PAGE}`,
    );
    return response.data;
  };
  const query = useQuery(
    ["groups", currentPage],
    () => fetchRooms(currentPage),
    {
      keepPreviousData: true,
      staleTime: 2 * 60 * 60 * 1000,
    },
  );
  return query;
};

export default useGroups;
