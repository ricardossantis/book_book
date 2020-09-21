import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import styled from "styled-components";
import PageTransition from "../../components/pageTransition";
import chatBackground from "../../assets/chat-topbar.jpg";
import TextContainer from "./TextContainer";
import Messages from "./Messages";
import InfoBar from "./InfoBar";
import Input from "./Input";

// const ENDPOINT = "localhost:5000"; // TO LOCAL TESTE
const ENDPOINT = "https://book-book-app.herokuapp.com/";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <PageTransition>
      <TopBar>
        <Title>Chat Aberto</Title>
      </TopBar>
      <RoomContainer>
        <Container>
          <InfoBar room={room} />
          <Messages messages={messages} name={name} />
          <Input
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </Container>
        <TextContainer users={users} />
      </RoomContainer>
    </PageTransition>
  );
};

export default Chat;

export const RoomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 78vh;
  @media (min-width: 320px) and (max-width: 480px) {
    height: 100%;
  }

  @media (min-width: 500px) and (max-width: 760px) {
    height: 600px;
  }
`;

export const TopBar = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${chatBackground});
  background-size: cover;
`;
export const Title = styled.h1`
  height: 100%;
  font-family: "Scada", sans-serif;
  font-weight: 600;
  font-size: 4rem;
  color: #e5e5e5;
  text-align: left;
  padding-top: 20px;
  padding-left: 35px;
  box-shadow: 6px 6px 12px #000;
  background: linear-gradient(
    -90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 1) 100%
  );
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #ffffff;
  border-radius: 8px;
  height: 75%;
  width: 35%;

  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 480px) and (max-width: 1200px) {
    width: 60%;
  }
`;
