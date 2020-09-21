import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateSession } from "../../redux/actions/session.js";
import PageTransition from "../../components/pageTransition";
import chatBackground from "../../assets/chat-topbar.jpg";
import bookbookIcon from "../../assets/icons/bookbook-icon.png";
import DevsIcon from "../../assets/icons/developers-icon.png";
import KenzieIcon from "../../assets/icons/kenzie-academy-icon.png";

const SignIn = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const name = useSelector((state) => state.session.user.user);
  const [{ user, token }] = useSelector((state) => [state.session]);
  useEffect(() => {
    dispatch(updateSession());
  }, [dispatch, token]);

  const enterRoom = (evt) => {
    evt.preventDefault();
    history.push(`/chat?name=${name}&room=${evt.currentTarget.value}`);
  };

  return (
    <PageTransition>
      <JoinRoom>
        <TopBar>
          <Title>Chat Aberto</Title>
        </TopBar>
        <FormBox>
          <Title2>Escolha uma sala</Title2>

          <RoomBtn value="bookbook" onClick={(e) => enterRoom(e)}>
            <BtnImage src={bookbookIcon} alt="bookbook-icon" />
          </RoomBtn>
          <RoomBtn value="developers" onClick={(e) => enterRoom(e)}>
            <BtnImage src={DevsIcon} alt="developers-icon" />
          </RoomBtn>
          <RoomBtn value="kenzie" onClick={(e) => enterRoom(e)}>
            <BtnImage src={KenzieIcon} alt="kenzie-academy-icon" />
          </RoomBtn>
        </FormBox>
      </JoinRoom>
    </PageTransition>
  );
};

export default SignIn;

export const JoinRoom = styled.div`
  width: 100vw;
`;

export const TopBar = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${chatBackground});
  background-size: cover;

  @media (max-width: 550px) {
    height: 100px;
  }

  @media (min-width: 500px) and (max-width: 760px) {
    height: 70px;
  }
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

  @media (max-width: 550px) {
    font-size: 2.6rem;
  }

  @media (min-width: 500px) and (max-width: 760px) {
    font-size: 2.4rem;
  }
`;

export const FormBox = styled.div`
  width: 650px;
  height: 550px;
  border-radius: 6px;
  margin: 100px auto 1px;
  background-color: #0093e9;
  background-image: linear-gradient(160deg, #100e17 0%, #051728 100%);
  box-shadow: 0px 0px 36px #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 470px) {
    width: 270px;
    margin: 40px auto 1px;
    height: 400px;
  }

  @media (min-width: 500px) and (max-width: 760px) {
    margin: 40px auto 1px;
    height: 330px;
  }
`;

export const Title2 = styled.div`
  font-family: "Scada", sans-serif;
  font-weight: 900;
  font-size: 2.5rem;
  color: #e5e5e5;
  margin: 25px 0;
  text-shadow: 3px 3px 16px #000;

  @media (max-width: 470px) {
    font-size: 1.6em;
    margin: 10px 0;
  }

  @media (min-width: 500px) and (max-width: 760px) {
    font-size: 1.4rem;
  }
`;

export const RoomBtn = styled.button`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
`;

export const BtnImage = styled.img`
  width: 320px;
  margin: 16px auto;
  -webkit-filter: drop-shadow(4px 4px 14px rgba(0, 0, 0, 0.8));
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
  }

  @media (max-width: 470px) {
    width: 200px;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (min-width: 500px) and (max-width: 760px) {
    width: 150px;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
