import styled from "styled-components";
import { Form, Button } from "antd";

export const LoginBox = styled.div`
  height: 96vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 550px) {
    margin-bottom: 74px;
    height: 116vh;
  }

  @media (min-width: 768px) {
    height: 80vh;
  }
`;

export const Avatar = styled.img`
  margin-top: 16px;
  width: 20px;

  @media (min-width: 550px) {
    margin-bottom: 15px;
  }

  @media (min-width: 768px) {
    width: 50px;
    margin-bottom: 18px;
  }
`;

export const Title = styled.h1`
  font-family: Inter, sans-serif;
  font-weight: 700;
  font-size: 1.2rem;
  margin: 14px;

  @media (min-width: 550px) {
    margin: 0;
    margin-bottom: 30px;
  }

  @media (min-width: 768px) {
    width: 28vw;
    margin: 16px;
    font-size: 1.8rem;
  }
`;

export const Quote = styled.p`
  width: 80vw;
  font-family: Scheherazade, sans-serif;
  font-style: italic;
  line-height: 1.2rem;
  color: #000;
  font-size: 1.4rem;
  margin: 16px;

  @media (min-width: 550px) {
    width: 70vw;
    margin: 8px;
  }

  @media (min-width: 768px) {
    width: 36vw;
    margin: 16px;
    font-size: 1.6rem;
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
    margin-top: 1rem;
  }

  @media (min-width: 768px) {
    width: 34vw;
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const StyledForm = styled(Form)`
  width: 70vw;

  @media (min-width: 550px) {
    width: 50vw;
    margin: 5vh 0;
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
  background-size: 200%;
  transition: 0.5s;
  box-shadow: 4px 4px 16px #c0c0c0;

  ​ &:hover {
    font-size: 1.3rem;
  }

  ​ @media (min-width: 550px) {
    margin: 0.6rem 0;
  }

  @media (min-width: 768px) {
    margin: 16px auto;
    width: 8vw;
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
