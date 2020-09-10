import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../../redux/actions/sessionActions";
import { LoginBox, Title, LoginButton } from "./styled-login";

import { user, password, remember } from "./verifications.json";

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.session);

  const onFinish = (values) => {
    dispatch(postLogin(values));
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      history.push("/timeline");
    }

    if (userInfo.status === 401) {
      message.warning("Usuário ou senha inválidos!");
    }
  }, [history, userInfo]);

  return (
    <LoginBox>
      <Title>LOGIN</Title>
      <Form name="basic" initialValues={remember} onFinish={onFinish}>
        <Form.Item name="username" rules={user}>
          <Input placeholder="Username" />
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
