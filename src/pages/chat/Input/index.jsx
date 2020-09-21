import React from "react";
import styled from "styled-components";

const Input = ({ setMessage, sendMessage, message }) => {
  return (
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
      <SendButton onClick={(e) => sendMessage(e)}>Enviar</SendButton>
    </Form>
  );
};

export default Input;

const Form = styled.form`
  display: flex;
  height: 16%;
  border-top: 2px solid #d3d3d3;
`;
const InputBox = styled.input`
  border: none;
  border-radius: 0;
  padding: 5%;
  width: 80%;
  font-size: 1.4rem;
  outline: none;
  color: #000;
  border-bottom-left-radius: 4px;

  &:focus {
    outline: none;
  }
`;
const SendButton = styled.button`
  color: #fff;
  font-family: "Inter", sans-serif;
  font-weight: 900;
  font-size: 1.4rem;
  text-transform: uppercase;
  text-decoration: none;
  background: #a0522d;
  padding: 14px;
  display: inline-block;
  border: none;
  width: 30%;
  border-bottom-right-radius: 4px;
  cursor: pointer;
  outline: none;
`;
