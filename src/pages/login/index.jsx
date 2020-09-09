import React, { useEffect } from "react";
import styled from "styled-components";
import { Form, Input, Button, Checkbox } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../../redux/actions";

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.setUserLogin);

  const onFinish = (values) => {
    dispatch(postLogin(values));
  };

  useEffect(() => {
    if (userInfo.token) {
      history.push("/timeline");
    }
  }, [history, userInfo]);

  return (
    <LoginForm>
      <Title>LOGIN</Title>
      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
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
    </LoginForm>
  );
};

export default Login;

const Title = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 4rem;
  margin: 0;
`;

const LoginForm = styled.div`
  border-radius: 6px;
  width: 500px;
  height: 350px;
  background-color: #cccccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
