import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TextContainer from "../TextContainer/TextContainer";
import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

let socket;

const Chat = ({ location }) => {
  const params = useParams();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // const ENDPOINT = "localhost:5000"; // TO LOCAL TESTE
  const ENDPOINT = "https://book-book-app.herokuapp.com/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);
    setRoom(params.room);
    setName(params.name);

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        alert(error);
      }
    });
    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, name, params.name, params.room, room]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, [message, messages, users]);

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="container">
        <div id="messages">
          {messages.map((message, key) => (
            <div key={key}>
              <span>{message.user}: </span>
              <span>{message.text}</span>
            </div>
          ))}
        </div>

        <input
          style={{ color: "black" }}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <Rooms>
        <ThisRoom>
          <h1>Users In this room</h1>
          {users.map((user) => (
            <span key={user.id} to={`/perfil/${user.name}`}>
              {user.room === room && user.name}
            </span>
          ))}
        </ThisRoom>
        <AllRooms>
          <h1>Rooms</h1>
          <span to={`/chat/${name}/kenzie`}>Kenzie</span>
          <span to={`/chat/${name}/q1`}>Q1</span>
          <span to={`/chat/${name}/q2`}>Q2</span>
        </AllRooms>
      </Rooms>
    </div>
  );
};

export default Chat;

export const RoomContainer = styled.div``;
export const Container = styled.div``;
