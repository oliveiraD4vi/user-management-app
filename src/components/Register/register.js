import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import api from "../../services/api";
import Notification from "../../services/notification";

import UserForm from "../User/UserForm/userForm";

const Register = () => {
  const [values, setValues] = useState(null);
  const [loading, setLoading] = useState();
  const [disabled, setDisabled] = useState();

  const navigate = useNavigate();

  const handleSubmit = async ({ name, cpf, rg, motherName, bornAt }) => {
    setLoading(true);
    setDisabled(true);

    const registeredAt = Date.now();

    try {
      const { data } = await api.post(`/user`, {
        name,
        cpf,
        rg,
        motherName,
        bornAt,
        registeredAt,
      });

      Notification("success", "User registered");
      navigate("/user/data", {
        state: {
          lastPath: "/register",
          data,
        },
      });
    } catch (error) {
      setLoading(false);
      setDisabled(false);

      Notification("error", "Bad request or user already exists");
    }
  };

  useEffect(() => {
    if (values) handleSubmit(values);
  }, [values]);

  return (
    <div className="register-container">
      <UserForm setValues={setValues} loading={loading} disabled={disabled} />
    </div>
  );
};

export default Register;
