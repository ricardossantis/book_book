import styled from "styled-components";
import { Form, Button } from "antd";

export const RegisterBox = styled.div`
  height: 105vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 550px) {
    height: 180vh;
  }

  @media (min-width: 768px) {
    height: 90vh;
  }
`;

export const Avatar = styled.img`
  margin-top: 16px;
  width: 20px;

  @media (min-width: 768px) {
    width: 50px;
    margin-bottom: 16px;
  }
`;

export const Title = styled.h1`
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  margin: 14px;
  margin-bottom: 60px;

  @media (min-width: 550px) {
    margin: 0;
    margin-top: 20px;
  }

  @media (min-width: 768px) {
    width: 28vw;
    margin: 16px;
    font-size: 1.8rem;
  }
`;

export const Container = styled.div`
  width: 90vw;
  height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  @media (min-width: 550px) {
    justify-content: normal;
  }

  @media (min-width: 768px) {
    width: 34vw;
  }
`;

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const StyledForm = styled(Form)`
  width: 70vw;

  @media (min-width: 550px) {
    width: 50vw;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 22vw;
  }
`;

export const StyledButton = styled(Button)`
  width: 100%;
  height: 50px;
  border-radius: 10px;
  margin: 1rem 0;
  font-size: 1.2rem;
  outline: none;
  border: none;
  text-transform: uppercase;
  font-family: "Inter", sans-serif;
  font-weight: bold;
  box-shadow: 4px 4px 16px #c0c0c0;
  background-size: 200%;
  transition: 0.5s;

  ​ &:hover {
    font-size: 1.2rem;
  }

  @media (min-width: 550px) {
    margin: 0.6rem 0;
  }

  @media (min-width: 768px) {
    margin: 16px auto;
    width: 10vw;
  }
`;

export const LinkA = styled.a`
  font-family: "Inter", sans-serif;
  text-decoration: none;
  color: #999;
  font-size: 1rem;
  transition: 0.3s;

  p {
    font-weight: 500;
    color: #0c154e;
    cursor: pointer;

    &:hover {
      font-weight: 600;
    }
  }

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const Info = styled.div`
  margin-top: 10px;
  color: #000;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1.1rem;

  &:hover {
    color: #0c154e;
  }

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;
