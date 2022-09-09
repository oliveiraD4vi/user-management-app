import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import moment from "moment";

import "./userData.css";

const UserData = ({ userData }) => {
  return (
    <div className="user-data-container">
      <Card>
        <div className="user-data-card">
          <div className="grid avatar">
            <Avatar
              size={{
                xs: 24,
                sm: 32,
                md: 40,
                lg: 64,
                xl: 80,
                xxl: 100,
              }}
              shape="square"
              icon={<UserOutlined />}
            />
          </div>

          <div className="grid">
            <div className="info">
              <span>ID:</span>
              <p>{userData.id}</p>
            </div>

            <div className="info">
              <span>NAME:</span>
              <p>{userData.name}</p>
            </div>
          </div>

          <div className="grid">
            <div className="info">
              <span>MOTHER:</span>
              <p>{userData.motherName}</p>
            </div>

            <div className="info">
              <span>BORN AT:</span>
              <p>{moment(userData.bornAt).format("DD/MM/YYYY")}</p>
            </div>
          </div>

          <div className="grid">
            <div className="info">
              <span>CPF:</span>
              <p>{userData.cpf}</p>
            </div>

            <div className="info">
              <span>RG:</span>
              <p>{userData.rg}</p>
            </div>
          </div>

          <div className="grid">
            <div className="info">
              <span>REGISTERED AT:</span>
              <p>{moment(userData.registeredAt).format("DD/MM/YYYY")}</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default UserData;
