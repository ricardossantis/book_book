import React from "react";
import { message } from "antd";
import axios from "axios";

import {
  InputContainer,
  StyledForm,
  H2Form,
  StyledButton,
  LinkA,
  StyledInput,
} from "./register.js";

import { useHistory } from "react-router-dom";

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

    axios
      .post("https://ka-users-api.herokuapp.com/users", apiObject)
      .then((res) => {
        info("Register successful");
        history.push("/");
      })
      .catch((err) => {
        info("Register Failed, please verify your inputs");
      });
  };

  return (
    <>
      <InputContainer>
        <StyledForm onFinish={onFinish}>
          <H2Form>Join us!</H2Form>
          <StyledForm.Item
            style={{ color: "white" }}
            name="name"
            label="Name"
            type="text"
            rules={name}
          >
            <StyledInput />
          </StyledForm.Item>
          <StyledForm.Item
            name="user"
            label="Username"
            type="text"
            rules={user}
          >
            <StyledInput />
          </StyledForm.Item>

          <StyledForm.Item name="email" label="Email" type="text" rules={email}>
            <StyledInput />
          </StyledForm.Item>

          <StyledForm.Item
            name="password"
            label="Password"
            type="password"
            rules={password}
          >
            <StyledInput.Password />
          </StyledForm.Item>

          <StyledForm.Item
            name="confirmPassword"
            label="Confirm password"
            type="password"
            rules={[password_confirmation, password_verifications]}
          >
            <StyledInput.Password />
          </StyledForm.Item>

          <LinkA to="/login">Voltar</LinkA>
          <StyledButton type="submit" htmlType="submit">
            Register
          </StyledButton>
        </StyledForm>
      </InputContainer>
    </>
  );
};

export default Register;
