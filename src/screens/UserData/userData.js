import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Loading } from "../../services/utils";

import UserDataComponent from "../../components/Home/UserData/userData";

const UserData = () => {
  const [userData, setUserData] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.data) {
      setUserData(location.state.data);
    } else {
      navigate("/user/list");
    }
  }, []);

  return userData ? <UserDataComponent userData={userData} /> : <Loading />;
};

export default UserData;
