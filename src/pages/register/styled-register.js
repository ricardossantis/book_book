import styled from "styled-components";
import { Form, Button, Input } from "antd";
import { Link } from "react-router-dom";

export const RegisterBox = styled.div`
  width: 500px;
  height: 700px;
  background-color: #cccccc;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const StyledInput = styled(Input)`
  margin: 1rem;
`;

export const StyledForm = styled(Form)`
  width: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const H2Form = styled.h2`
  font-family: Roboto;
  font-weight: 700;
  font-size: 4rem;
  margin: 0;
`;

export const LinkA = styled(Link)`
  display: block;
  text-align: right;
  text-decoration: none;
  color: #999;
  font-size: 0.9rem;
  transition: 0.3s;

  &:hover {
    color: #ccc;
  }
`;

export const StyledButton = styled(Button)`
  display: block;
  width: 100%;
  height: 50px;
  border-radius: 25px;
  margin: 1rem 0;
  font-size: 1.2rem;
  outline: none;
  border: none;
  text-transform: uppercase;
  background-size: 200%;
  transition: 0.5s;

  &:hover {
    background-color: #33c;
  }

  &:focus {
  }
`;
