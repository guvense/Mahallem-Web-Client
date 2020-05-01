import "./Login.scss";
import "../../global/design/tools.scss";
import Logo from "../../assets/images/M.png";

import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox, Card, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { loginRequest, setRegisterStatus } from "global/authentication/reducer";

const LoginPage = (props) => {
  const { user, error, logging, registered } = useSelector(
    (state) => state.authentication
  );
  const history = useHistory();
  let { from } = history.location.state || { from: { pathname: "/" } };
  const registerPath = "/register";

  useEffect(() => {
    if (logging) {
      history.push(from);
    }
  }, [history, logging, from, user.id]);

  const dispatch = useDispatch();

  const onFinish = (values) => {
    dispatch(loginRequest(values));
  };

  const onRegister = () => {
    dispatch(setRegisterStatus(false));
    history.push(registerPath);
  };

  return (
    <>
      <Card className="login-card">
        <img src={Logo} className="logo" alt="Mahallem" />
        {error && (
          <Alert message={error} type="error" style={{ marginBottom: 10 }} />
        )}
        <Form
          name="mahallem_login"
          className="login-form-layout"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Please input your Username" }]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              className="form-item"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password" }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              className="form-item"
            />
          </Form.Item>
          <Form.Item>
            <a className="login-form-forgot" href="">
              Forgot Password?
            </a>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Log in
            </Button>
            <Button
              type="primary"
              htmlType="submit"
              className="register-form-button"
              onClick={onRegister}
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  );
};

export default LoginPage;
