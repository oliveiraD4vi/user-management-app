import { PageHeader } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

import ConsultComponent from "../../components/Consult/consult";

const Consult = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="page-container">
      <PageHeader
        className="site-page-header"
        onBack={() =>
          navigate(location.state.lastPath, {
            state: {
              lastPath: "/consult",
            },
          })
        }
        title="Consult"
      />
      <ConsultComponent />
    </div>
  );
};

export default Consult;
