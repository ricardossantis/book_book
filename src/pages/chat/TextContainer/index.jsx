import React from "react";
import styled from "styled-components";
import { FcComments } from "react-icons/fc";

const TextContainer = ({ users }) => {
  return (
    <TextContainerBox>
      {users ? (
        <div>
          <h1>
            Usuários online{" "}
            <span role="img" aria-label="emoji">
              💬
            </span>
          </h1>
          <ActiveContainer>
            <h2>
              {users.map(({ name }) => (
                <ActiveItem key={name}>
                  <p>{name}</p>
                  <FcComments />
                </ActiveItem>
              ))}
            </h2>
          </ActiveContainer>
        </div>
      ) : (
        <div>
          <h1>Nenhum usuário online!</h1>
          <p> Envie uma mensagem :)</p>
        </div>
      )}
    </TextContainerBox>
  );
};

export default TextContainer;

const TextContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  color: #000;
  height: 70%;
  width: 20%;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-family: "Inter", sans-serif;
    font-weight: 800;
    color: #000;
    margin-bottom: 0px;
  }

  @media (min-width: 320px) and (max-width: 1200px) {
    display: none;
  }
`;

const ActiveContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20%;
  color: #fff;

  p {
    margin: 0;
    padding-right: 5px;
    margin-left: 30px;
    color: #696969;
  }
`;

const ActiveItem = styled.div`
  display: flex;
  align-items: center;
`;
