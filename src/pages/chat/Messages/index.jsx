import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import Message from "./Message/Message";
import styled from "styled-components";

const Messages = ({ messages, name }) => (
  <MessagesBox>
    {messages.map((message, i) => (
      <div key={i}>
        <Message message={message} name={name} />
      </div>
    ))}
  </MessagesBox>
);

export default Messages;

const MessagesBox = styled(ScrollToBottom)`
  padding: 5% 0;
  overflow: auto;
  flex: auto;
`;
