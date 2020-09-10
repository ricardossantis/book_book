import React from "react";
import { message } from "antd";
import { useHistory } from "react-router-dom";
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

import {
  name,
  email,
  user,
  password,
  password_confirmation,
} from "./verifications.json";

import password_verifications from "./password-verifications.js";

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
            rules={name}
          >
            <StyledInput placeholder="Nome" />
          </StyledForm.Item>
          <StyledForm.Item name="user" type="text" rules={user}>
            <StyledInput placeholder="Nome de usuário" />
          </StyledForm.Item>

          <StyledForm.Item name="email" type="text" rules={email}>
            <StyledInput placeholder="Email" />
          </StyledForm.Item>

          <StyledForm.Item name="password" type="password" rules={password}>
            <StyledInput.Password placeholder="Senha" />
          </StyledForm.Item>

          <StyledForm.Item
            name="confirmPassword"
            type="password"
            rules={[password_confirmation, password_verifications]}
          >
            <StyledInput.Password placeholder="Confirme sua senha" />
          </StyledForm.Item>

          <LinkA to="/login">Voltar</LinkA>
          <StyledButton type="submit" htmlType="submit">
            Cadastrar
          </StyledButton>
        </StyledForm>
      </InputContainer>
    </RegisterBox>
  );
};

export default Register;
