import React from "react";
import styled from "styled-components";

const Input = ({ setMessage, sendMessage, message }) => (
  <Form>
    <InputBox
      type="text"
      placeholder="Escreva uma mensagem..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={(event) =>
        event.key === "Enter" ? sendMessage(event) : null
      }
    />
    <SendButton onClick={(e) => sendMessage(e)}>Send</SendButton>
  </Form>
);

export default Input;

const Form = styled.form``;
const InputBox = styled.input``;
const SendButton = styled.button``;
