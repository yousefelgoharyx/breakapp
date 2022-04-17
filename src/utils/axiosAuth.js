import axios from "axios";

const instance = token => {
  return axios.create({
    baseURL: "https://break-app-123.herokuapp.com/api/v1",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

// const createAxiosResponseInterceptor = () => {
//   const interceptor = instance.interceptors.response.use(
//     response => response,
//     error => {
//       // Reject promise if usual error
//       if (error.response.status !== 401) {
//         return Promise.reject(error);
//       }

//       instance.interceptors.response.eject(interceptor);
//       return instance
//         .post("/auth/realms/EOSBRealm/protocol/openid-connect/token", {})
//         .then(response => {
//           localStorage.setItem("access_token", response.data.access_token);
//           localStorage.setItem("refresh_token", response.data.refresh_token);

//           error.response.config.headers["Authorization"] =
//             "Bearer " + response.data.access_token;
//           return instance(error.response.config);
//         })
//         .catch(error => {
//           localStorage.clear();
//           window.location.href = "/login";
//           return Promise.reject(error);
//         })
//         .finally(createAxiosResponseInterceptor);
//     },
//   );
// };
// createAxiosResponseInterceptor();
export default instance;
