import styled from "styled-components";
import { Form, Button, Input } from "antd";
import { Link } from "react-router-dom";

export const RegisterBox = styled.div`
  width: 500px;
  height: 700px;
  background-color: #cccccc;
  border-radius: 10px;
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
  // margin: 1rem;
`;

export const StyledForm = styled(Form)`
  width: 280px;
  display: flex;
  flex-direction: column;
  // align-items: center;
  justify-content: center;
  text-align: center;
`;

export const H2Form = styled.h2`
  font-family: Roboto;
  font-weight: 700;
  font-size: 4rem;
  // margin: 0;
`;

export const LinkA = styled(Link)`
  display: block;
  margin: 0 auto;
  text-decoration: none;
  color: #000;
  font-size: 0.9rem;
  width: 100%;
  height: 24px;
  transition: 0.5s;
  background-color: #fff;
  padding: 2px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;

  &:hover {
    background-color: rgba(41, 128, 185, 0.6);
    color: #fff;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  height: 40px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  margin: 0.6rem 0;
  font-size: 1.2rem;
  font-weight: bold;
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
