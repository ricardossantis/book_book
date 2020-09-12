import React from "react";
import { useHistory } from "react-router-dom";

import { name, email, user, password, pass_confirm } from "./verifications.json";
import pass_verify from "./password-verifications.js";
import api from "../../services/api";

import { message } from "antd";
import { RegisterBox, InputContainer, StyledForm, H2Form, StyledButton, LinkA, StyledInput } from "./styled-register.js";

const Register = () => {
  const history = useHistory();

  const info = (infoMessage) => message.info(infoMessage);

  const onFinish = (user) => {
    api.post("/users", { user })
      .then(() => {
        info("Register successful");
        history.push("/");
      })
      .catch(() => info("Register Failed, please verify your inputs"))
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
            rules={[pass_confirm, pass_verify]}
          >
            <StyledInput.Password placeholder="Confirme sua senha" />
          </StyledForm.Item>

          <LinkA to="/logar">Voltar</LinkA>
          <StyledButton type="submit" htmlType="submit">
            Cadastrar
          </StyledButton>
        </StyledForm>
      </InputContainer>
    </RegisterBox>
  );
};

export default Register;
