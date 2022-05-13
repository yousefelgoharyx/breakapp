import {useMutation} from "react-query";
import useAxios from "../../../hooks/useAxios";

const useCreateGroup = () => {
  const axios = useAxios();
  const mutation = useMutation(newGroup => {
    console.log(newGroup);
    return axios.post("/agency/create", newGroup, {
      headers: {"Content-Type": "application/json"},
    });
  });
  return mutation;
};

export default useCreateGroup;
