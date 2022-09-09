import { Form, Input, Button, DatePicker } from "antd";
import {
  FieldNumberOutlined,
  IdcardOutlined,
  UserOutlined,
} from "@ant-design/icons";

import "./userForm.css";

const UserForm = ({ setValues, disabled, loading }) => {
  const [form] = Form.useForm();
  const dateFormat = "DD/MM/YYYY";

  const handleSubmit = (values) => {
    setValues(values);
  };

  return (
    <div className="user-form-container">
      <Form form={form} className="register-form" onFinish={handleSubmit}>
        <Form.Item
          name="name"
          rules={[
            {
              required: true,
              message: "Type full name",
            },
            {
              min: 10,
              message: "This is not an valid full name",
            },
            {
              pattern: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
              message: "Words only",
            },
          ]}
        >
          <Input
            disabled={disabled}
            prefix={<UserOutlined className="icon" />}
            placeholder="Name"
          />
        </Form.Item>

        <Form.Item
          name="motherName"
          rules={[
            {
              required: true,
              message: "Type full name",
            },
            {
              min: 10,
              message: "This is not an valid full name",
            },
            {
              pattern: /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
              message: "Words only",
            },
          ]}
        >
          <Input
            disabled={disabled}
            prefix={<UserOutlined className="icon" />}
            placeholder="Filiation (Mother)"
          />
        </Form.Item>

        <Form.Item
          name="cpf"
          rules={[
            {
              required: true,
              message: "Type user CPF",
            },
            {
              min: 6,
              message: "This is not an valid CPF",
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
            placeholder="User CPF"
          />
        </Form.Item>

        <Form.Item
          name="rg"
          rules={[
            {
              required: true,
              message: "Type user RG",
            },
            {
              min: 6,
              message: "This is not an valid RG",
            },
            {
              pattern: /^[\d-]+$/,
              message: "Numbers only",
            },
          ]}
        >
          <Input
            disabled={disabled}
            prefix={<IdcardOutlined className="icon" />}
            placeholder="User RG"
          />
        </Form.Item>

        <Form.Item
          name="bornAt"
          rules={[
            {
              required: true,
              message: "Add you birthday",
            },
          ]}
        >
          <DatePicker disabled={disabled} format={dateFormat} />
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

export default UserForm;
