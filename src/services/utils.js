import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';

const AUTH = "GCUSER";

export const Loading = () => {
  return (
    <Spin
      tip="Wait or try to reload"
      indicator={
        <LoadingOutlined
          style={{ fontSize: 24 }}
          spin
        />
      }
    />
  );
};

export const auth = {
  login(authData) {
    localStorage.setItem(AUTH, JSON.stringify(authData));
  },
  logout() {
    localStorage.removeItem(AUTH);
  },
  isAuthenticated() {
    return localStorage.getItem(AUTH) !== null ? true : false;
  },
  getToken() {
    const { token } = JSON.parse(localStorage.getItem(AUTH));
    return token;
  },
  getId() {
    const { userId } = JSON.parse(localStorage.getItem(AUTH));
    return userId;
  },
};
