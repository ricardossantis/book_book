import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginWithAPI } from "../../redux/actions/session.js";
import { user, password, remember } from "./verifications.json";

import { Form, Input, Checkbox, message } from "antd";
import { LoginBox, Title, LoginButton } from "./styled-login";

const Login = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { token, status } = useSelector((state) => state.session);

  const onFinish = (values) => {
    dispatch(loginWithAPI(values));
  };

  useEffect(() => {
    token && history.push("/explorar");
    status === 401 && message.warning("Usuário ou senha inválidos!");
  }, [status, token, history]);

  return (
    <LoginBox>
      <Title>LOGIN</Title>
      <Form name="basic" initialValues={remember} onFinish={onFinish}>
        <Form.Item name="user" rules={user}>
          <Input placeholder="User" />
        </Form.Item>
        <Form.Item name="password" rules={password}>
          <Input.Password placeholder="Password" />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <Form.Item>
          <LoginButton type="primary" htmlType="submit">
            Submit
          </LoginButton>
        </Form.Item>
      </Form>
    </LoginBox>
  );
};

export default Login;
