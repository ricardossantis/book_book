import React from "react";
import { message } from "antd";
import api from "../../services/api";
import {
  RegisterBox,
  InputContainer,
  StyledForm,
  H2Form,
  StyledButton,
  LinkA,
  StyledInput,
} from "./styled-register.js";
import { useHistory } from "react-router-dom";

const Register = () => {
  const history = useHistory();

  const info = (infoMessage) => {
    message.info(infoMessage);
  };

  const onFinish = (values) => {
    let apiObject = { user: values };

    api
      .post("/users", apiObject)
      .then((res) => {
        info("Register successful");
        history.push("/");
      })
      .catch((err) => {
        info("Register Failed, please verify your inputs");
      });
  };

  return (
    <RegisterBox>
      <InputContainer>
        <StyledForm onFinish={onFinish}>
          <H2Form>Cadastro</H2Form>
          <StyledForm.Item
            style={{ color: "white" }}
            name="name"
            type="text"
            rules={[
              { required: true, message: "Please type your name!" },
              {
                pattern: /[A-Za-z]* [A-Za-z]*/,
                message: "Your name must be formated as 'name last name')",
              },
            ]}
          >
            <StyledInput placeholder="Nome" />
          </StyledForm.Item>
          <StyledForm.Item
            name="user"
            type="text"
            rules={[
              { required: true, message: "Please input your username!" },
              {
                min: 6,
                message: "Username must be at least 6 characters long",
              },
            ]}
          >
            <StyledInput placeholder="Nome de usuário" />
          </StyledForm.Item>

          <StyledForm.Item
            name="email"
            type="text"
            rules={[
              { required: true, message: "Please type your Email!" },
              {
                pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/gi,
                message: "Email must be example@example.com",
              },
            ]}
          >
            <StyledInput placeholder="Email" />
          </StyledForm.Item>

          <StyledForm.Item
            name="password"
            type="password"
            rules={[
              { required: true, message: "Please input your password!" },
              {
                min: 6,
                message: "Password must be at least 6 characters long",
              },
              {
                pattern: /(?=.*[}{,^?~=+\-_*\-+|!@#$%&-+¨´"'])/,
                message: "Must contain at least one special character",
              },
            ]}
          >
            <StyledInput placeholder="Senha" />
          </StyledForm.Item>

          <StyledForm.Item
            name="confirmPassword"
            type="password"
            rules={[
              { required: true, message: "Please confirm your password!" },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    "Passwords that you entered do not match!"
                  );
                },
              }),
            ]}
          >
            <StyledInput placeholder="Confirme sua senha" />
          </StyledForm.Item>

          <LinkA to="/">Voltar</LinkA>
          <StyledButton type="submit" htmlType="submit">
            Cadastrar
          </StyledButton>
        </StyledForm>
      </InputContainer>
    </RegisterBox>
  );
};

export default Register;
