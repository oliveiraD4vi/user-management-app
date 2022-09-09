import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { PageHeader } from "antd";
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

  return userData ? (
    <div className="page-container">
      <PageHeader
        className="site-page-header"
        onBack={() => navigate("/user/list")}
        title="User data"
      />
      <UserDataComponent userData={userData} />
    </div>
  ) : (
    <Loading />
  );
};

export default UserData;
