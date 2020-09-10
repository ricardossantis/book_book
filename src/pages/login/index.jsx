import React, { useEffect } from "react";
import styled from "styled-components";
import { Form, Input, Button, Checkbox, message } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../../redux/actions/session.actions";

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

    if (userInfo.status === 500) {
      message.error("Erro no Servidor, Por favor tente novamente mais tarde!");
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
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </LoginBox>
  );
};

export default Login;

const Title = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 4rem;
  margin: 0;
`;

const LoginBox = styled.div`
  border-radius: 6px;
  width: 500px;
  height: 350px;
  background-color: #cccccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
