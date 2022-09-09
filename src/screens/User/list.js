import { PageHeader } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

import ListComponent from "../../components/User/list";

const List = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="page-container">
      <PageHeader
        className="site-page-header"
        onBack={() =>
          navigate(location.state.lastPath, {
            state: {
              lastPath: "/user/list",
            },
          })
        }
        title="Listing"
      />
      <ListComponent />
    </div>
  );
};

export default List;
