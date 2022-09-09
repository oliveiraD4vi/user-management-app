import { useState } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { FieldNumberOutlined } from "@ant-design/icons";

import Notification from "../../services/notification";
import api from "../../services/api";

const Consult = () => {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const navigate = useNavigate();
  const [form] = Form.useForm();

  const handleSubmit = async ({ identification }) => {
    setLoading(true);
    setDisabled(true);

    try {
      const response = await api.get(
        `/consult?identification=${identification}`
      );
      const { data } = response;

      navigate("/user/data", {
        state: {
          lastPath: "/consult",
          data,
        },
      });
    } catch (error) {
      setLoading(false);
      setDisabled(false);

      form.setFieldsValue({
        identification: null,
      });
      Notification("error", "User not found");
    }
  };

  return (
    <div className="consult-container">
      <Form form={form} className="register-form" onFinish={handleSubmit}>
        <Form.Item
          name="identification"
          rules={[
            {
              required: true,
              message: "Type user identification",
            },
            {
              min: 8,
              message: "This is not an valid CPF or RG",
            },
            {
              pattern: /^[\d-.]+$/,
              message: "Numbers only",
            },
          ]}
        >
          <Input
            disabled={disabled}
            prefix={<FieldNumberOutlined className="icon" />}
            placeholder="User identifications (CPF or RG)"
          />
        </Form.Item>

        <Form.Item className="btn">
          <Button
            loading={loading}
            type="primary"
            htmlType="submit"
            className="primary-button"
          >
            SUBMIT
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Consult;
