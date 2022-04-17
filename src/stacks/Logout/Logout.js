import {useAuth} from "../../context/auth";

const Logout = () => {
  const {logout} = useAuth();
  logout();

  return null;
};

export default Logout;
