import {useQuery} from "react-query";
import useAxios from "../../../hooks/useAxios";

const useRooms = () => {
  const axios = useAxios();
  const fetchRooms = async () => {
    const response = await axios.get("/rooms");
    return response.data;
  };
  const query = useQuery("rooms", fetchRooms);
  return query;
};

export default useRooms;
