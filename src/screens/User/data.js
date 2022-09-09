import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button, Modal, PageHeader } from "antd";
import { Loading } from "../../services/utils";
import {
  CloseOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import api from "../../services/api";
import Notification from "../../services/notification";
import UserForm from "../../components/User/UserForm/userForm";
import UserDataComponent from "../../components/User/UserData/userData";

const UserData = () => {
  const [userData, setUserData] = useState(null);
  const [edit, setEdit] = useState(false);

  const { confirm } = Modal;

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.data) {
      setUserData(location.state.data);
    } else {
      navigate("/");
    }
  }, []);

  const showDeleteConfirm = () => {
    confirm({
      title: "Are you sure delete this user?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        onDelete();
      },
    });
  };

  const onDelete = async () => {
    try {
      await api.delete(`/user?id=${userData.id}`);

      Notification("success", "User deleted");
      navigate("/user/list");
    } catch (error) {
      Notification("error", "Request not available");
    }
  };

  return userData ? (
    <div className="page-container">
      <div
        className="page-header"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <PageHeader
          className="site-page-header"
          onBack={() => navigate("/user/list")}
          title="User data"
        />
        <div>
          <Button onClick={showDeleteConfirm} type="dashed">
            <DeleteOutlined /> Delete
          </Button>
          {edit ? (
            <Button
              onClick={() => setEdit(false)}
              style={{ marginLeft: "10px" }}
            >
              <CloseOutlined /> Cancel
            </Button>
          ) : (
            <Button
              onClick={() => setEdit(true)}
              style={{ marginLeft: "10px" }}
            >
              <EditOutlined /> Edit
            </Button>
          )}
        </div>
      </div>
      {edit ? <UserForm /> : <UserDataComponent userData={userData} />}
    </div>
  ) : (
    <Loading />
  );
};

export default UserData;
