import { Button, Menu } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./header.css";

const Header = () => {
  const [current, setCurrent] = useState("mail");

  const navigate = useNavigate();

  const onClick = (e) => {
    setCurrent(e.key);
  };

  const items = [
    {
      label: (
        <Button
          className="navigation-button"
          onClick={() => navigate("/user/list")}
        >
          Users List
        </Button>
      ),
      key: "list",
    },
    {
      label: (
        <Button
          className="navigation-button"
          onClick={() => navigate("/user/register")}
        >
          Register
        </Button>
      ),
      key: "register",
    },
    {
      label: (
        <Button
          className="navigation-button"
          onClick={() => navigate("/user/consult")}
        >
          Consultation
        </Button>
      ),
      key: "consult",
    },
  ];

  return (
    <div className="header-container">
      <div className="brand">
        <h1>User</h1>
        <h1>Management</h1>
      </div>
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};

export default Header;
