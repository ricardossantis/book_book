import React from "react";
import ReactEmoji from "react-emoji";
import styled from "styled-components";

const Message = ({ message: { text, user }, name }) => {
  let isSentByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();

  if (user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <MessageContainer className="justifyEnd">
      <SentText className="pr-10">{trimmedName}</SentText>
      <MessageBox className="backgroundBlue">
        <MessageText className="colorWhite">
          {ReactEmoji.emojify(text)}
        </MessageText>
      </MessageBox>
    </MessageContainer>
  ) : (
    <MessageContainer className="justifyStart">
      <messageBox className="backgroundLight">
        <MessageText className="colorDark">
          {ReactEmoji.emojify(text)}
        </MessageText>
      </messageBox>
      <SentText className="pl-10 ">{user}</SentText>
    </MessageContainer>
  );
};

export default Message;

const MessageBox = styled.div`
  background: #f3f3f3;
  border-radius: 20px;
  padding: 5px 20px;
  color: white;
  display: inline-block;
  max-width: 80%;

  .backgroundBlue {
    background: #2979ff;
  }

  .backgroundLight {
    background: #f3f3f3;
  }
`;

const MessageText = styled.p`
  width: 100%;
  letter-spacing: 0;
  float: left;
  font-size: 1.1em;
  word-wrap: break-word;

  img {
    vertical-align: middle;
  }

  .colorWhite {
    color: white;
  }

  .colorDark {
    color: #353535;
  }
`;

const MessageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 0 5%;
  margin-top: 3px;

  .justifyStart {
    justify-content: flex-start;
  }

  .justifyEnd {
    justify-content: flex-end;
  }
`;

const SentText = styled.p`
  display: flex;
  align-items: center;
  font-family: Helvetica;
  color: #828282;
  letter-spacing: 0.3px;

  .pl-10 {
    padding-left: 10px;
  }

  .pr-10 {
    padding-right: 10px;
  }
`;
