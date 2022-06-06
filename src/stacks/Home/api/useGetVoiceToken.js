import {useMutation, useQuery} from 'react-query';
import useAxios from '../../../hooks/useAxios';

const useGetVoiceToken = () => {
  const axios = useAxios();

  const mutation = useMutation(room => {
    console.log(room);
    return axios.get(
      `/agora_access_token?channelName=${room.name}&role=publisher&uid=${
        room.uid
      }&expireTime=${1000 * 60 * 60 * 24}`,
    );
  });
  return mutation;
};

export default useGetVoiceToken;
