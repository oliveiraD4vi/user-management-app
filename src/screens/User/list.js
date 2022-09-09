import { PageHeader } from "antd";
import { useNavigate } from "react-router-dom";

import ListComponent from "../../components/User/list";

const List = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <PageHeader
        className="site-page-header"
        onBack={() => navigate("/home")}
        title="Listing"
      />
      <ListComponent />
    </div>
  );
};

export default List;
