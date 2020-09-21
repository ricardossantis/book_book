import React from "react";
import styled from "styled-components";
import { FcComments } from "react-icons/fc";
import { RiCloseLine } from "react-icons/ri";

const InfoBar = ({ room }) => (
  <InfoBarBox>
    <LeftInnerContainer>
      <OnlineIcon
        className="onlineIcon"
        src={FcComments}
        alt="icone de online"
      />
      <h3>{room}</h3>
    </LeftInnerContainer>
    <RightInnerContainer>
      <a href="/">
        <img src={RiCloseLine} alt="icone de fechar" />
      </a>
    </RightInnerContainer>
  </InfoBarBox>
);

export default InfoBar;

const InfoBarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #2979ff;
  border-radius: 4px 4px 0 0;
  height: 60px;
  width: 100%;
`;
const LeftInnerContainer = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  margin-left: 5%;
  color: white;
`;

const RightInnerContainer = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: flex-end;
  margin-right: 5%;
`;

const OnlineIcon = styled.div`
  margin-right: 5%;
`;
