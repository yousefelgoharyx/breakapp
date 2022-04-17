import {useQuery} from "react-query";
import useAxios from "../../../hooks/useAxios";

const useProfile = () => {
  const axios = useAxios();
  const fetchRooms = async () => {
    const response = await axios.get("/users/getMyProfile");
    return response.data;
  };
  const query = useQuery("profile", fetchRooms);
  return query;
};

export default useProfile;
