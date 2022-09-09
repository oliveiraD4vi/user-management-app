import { GithubOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import ManagementImage from "../../assets/management-image.jpg";

import "./home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="management-image">
        <img src={ManagementImage} alt="management" />
        <a
          href="https://br.freepik.com/vetores-gratis/icone-plano-de-comunicacao_4167276.htm#query=management&position=2&from_view=search"
          target="_blank"
          rel="noreferrer"
        >
          Imagem de katemangostar no Freepik
        </a>
      </div>

      <div className="information">
        <h1>Hello, there!</h1>
        <h2>
          This is a project for simple user management created with React and
          AntDesign UI for the Front and Java SpringBoot connected to a
          PostgreSQL database for the API <br /> You can check our repositories
          at
        </h2>
        <div className="home-bottom">
          <Tooltip title="Frontend repository">
            <a
              className="front"
              href="https://github.com/oliveiraD4vi/user-management-app"
              target="_blank"
              rel="noreferrer"
            >
              <GithubOutlined />
            </a>
          </Tooltip>

          <Tooltip title="API repository">
            <a
              className="back"
              href="https://github.com/oliveiraD4vi/user-management-api"
              target="_blank"
              rel="noreferrer"
            >
              <GithubOutlined />
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default Home;
