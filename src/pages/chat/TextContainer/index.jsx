import React from "react";
import styled from "styled-components";
import { FcComments } from "react-icons/fc";

const TextContainer = ({ users }) => (
  <TextContainerBox>
    <div>
      <h1>
        Realtime Chat Application{" "}
        <span role="img" aria-label="emoji">
          💬
        </span>
      </h1>
      <h2>
        Criado com React, Express, Node e Socket.IO{" "}
        <span role="img" aria-label="emoji">
          ❤️
        </span>
      </h2>
      <h2>
        Experimente agora mesmo!{" "}
        <span role="img" aria-label="emoji">
          ⬅️
        </span>
      </h2>
    </div>
    {users ? (
      <div>
        <h1>Pessoas atualmente no chat:</h1>
        <ActiveContainer>
          <h2>
            {users.map(({ name }) => (
              <ActiveItem key={name}>
                {name}
                <img alt="Online Icon" src={FcComments} />
              </ActiveItem>
            ))}
          </h2>
        </ActiveContainer>
      </div>
    ) : null}
  </TextContainerBox>
);

export default TextContainer;

const TextContainerBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 100px;
  color: white;
  height: 60%;
  justify-content: space-between;

  h1 {
    margin-bottom: 0px;
  }

  @media (min-width: 320px) and (max-width: 1200px) {
    display: none;
  }
`;

const ActiveContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 50%;

  img {
    padding-left: 10px;
  }
`;

const ActiveItem = styled.div`
  display: flex;
  align-items: center;
`;
