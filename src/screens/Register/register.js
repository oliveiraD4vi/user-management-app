import { PageHeader } from "antd";
import { useNavigate, useLocation } from "react-router-dom";

import RegisterComponent from "../../components/Register/register";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="page-container">
      <PageHeader
        className="site-page-header"
        onBack={() =>
          navigate(location.state.lastPath, {
            state: {
              lastPath: "/register",
            },
          })
        }
        title="Register"
      />
      <RegisterComponent />
    </div>
  );
};

export default Register;
