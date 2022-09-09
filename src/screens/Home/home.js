import { PageHeader } from "antd";
import { useNavigate } from "react-router-dom";

import HomeComponent from "../../components/Home/home";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <PageHeader
        className="site-page-header"
        onBack={() => navigate("/home")}
        title="Listing"
      />
      <HomeComponent />
    </div>
  );
};

export default Home;
