import styled from "styled-components";
import { Form, Button } from "antd";
import { Link } from "react-router-dom";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 7rem;
  padding: 0 2rem;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  .ant-select-selector {
    height: 55px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }
  .ant-select-selection-item {
    margin-top: 30px;
  }
`;

export const StyledForm = styled(Form)`
  width: 360px;
`;

export const H2Form = styled.h2`
  font-size: 2.9rem;
  text-transform: uppercase;
  margin: 15px 0;
  color: #333;
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
  }

  &:focus {
  }
`;
