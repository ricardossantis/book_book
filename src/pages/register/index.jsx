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
            rules={[
              { required: true, message: "Please type your name!" },
              {
                pattern: /[A-Za-z]* [A-Za-z]*/,
                message: "Your name must be formated as 'name last name')",
              },
            ]}
          >
            <StyledInput />
          </StyledForm.Item>
          <StyledForm.Item
            name="user"
            label="Username"
            type="text"
            rules={[
              { required: true, message: "Please input your username!" },
              {
                min: 6,
                message: "Username must be at least 6 characters long",
              },
            ]}
          >
            <StyledInput />
          </StyledForm.Item>

          <StyledForm.Item
            name="email"
            label="Email"
            type="text"
            rules={[
              { required: true, message: "Please type your Email!" },
              {
                pattern: /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/gi,
                message: "Email must be example@example.com",
              },
            ]}
          >
            <StyledInput />
          </StyledForm.Item>

          <StyledForm.Item
            name="password"
            label="Password"
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
            <StyledInput />
          </StyledForm.Item>

          <StyledForm.Item
            name="confirmPassword"
            label="Confirm password"
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
            <StyledInput />
          </StyledForm.Item>

          <LinkA to="/">Voltar</LinkA>
          <StyledButton type="submit" htmlType="submit">
            Register
          </StyledButton>
        </StyledForm>
      </InputContainer>
    </>
  );
};

export default Register;
