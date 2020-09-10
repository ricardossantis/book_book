import styled from "styled-components";
import { Button } from "antd";

export const LoginBox = styled.div`
  border-radius: 6px;
  width: 500px;
  height: 350px;
  background-color: #cccccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 4rem;
  margin: 0;
`;

export const LoginButton = styled(Button)`
  width: 100%;
  height: 40px;
  border-radius: 8px;
`;