import { PageHeader } from "antd";
import { useNavigate } from "react-router-dom";

import ConsultComponent from "../../components/Consult/consult";

const Consult = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <PageHeader
        className="site-page-header"
        onBack={() => navigate("/home")}
        title="Consult"
      />
      <ConsultComponent />
    </div>
  );
};

export default Consult;
