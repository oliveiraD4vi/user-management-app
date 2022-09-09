import { PageHeader } from "antd";
import { useNavigate } from "react-router-dom";

import RegisterComponent from "../../components/Register/register";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <PageHeader
        className="site-page-header"
        onBack={() => navigate("/")}
        title="Register"
      />
      <RegisterComponent />
    </div>
  );
};

export default Register;
