import { useHistory } from "react-router-dom";
import React, { useEffect } from "react";
import { Form, Input, Button, Card } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../assets/images/M.png";
import { registerRequest } from "global/authentication/reducer";
import "./Register.scss";
import "../../global/design/tools.scss";

const RegisterPage = (props) => {
  const history = useHistory();
  const { registered } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  let { from } = history.location.state || { from: { pathname: "/login" } };

  useEffect(() => {
    if (registered) {
      history.push(from);
    }
  }, [registered]);

  const onFinish = (values) => {
    dispatch(registerRequest(values));
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Card className="register-card">
        <img src={Logo} className="logo" alt="Mahallem" />
        <Form
          name="mahallem_register"
          className="register-form-layout"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          initialValues={{ remember: true }}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username" }]}
          >
            <Input
              className="form-item"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="username"
            />
          </Form.Item>
          <Form.Item
            name="firstname"
            rules={[{ required: true, message: "Please input your firstname" }]}
          >
            <Input
              className="form-item"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="firstname"
            />
          </Form.Item>
          <Form.Item
            name="lastname"
            rules={[{ required: true, message: "Please input your Lastname" }]}
          >
            <Input
              className="form-item"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="lastname"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your password" }]}
          >
            <Input
              className="form-item"
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="save-form-button"
            >
              Save
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default RegisterPage;
