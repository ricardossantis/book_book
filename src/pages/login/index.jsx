import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postLogin } from "../../redux/actions/sessionActions";
import { LoginBox, Title } from "./styled-login";

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
    </LoginBox>
  );
};

export default Login;
