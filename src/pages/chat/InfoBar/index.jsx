import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FcGlobe } from "react-icons/fc";
import { RiCloseLine } from "react-icons/ri";
import BookBookIcon from "../../../assets/icons/books-icon.png";
import ReactIcon from "../../../assets/icons/react.png";
import KenzieIcon from "../../../assets/icons/kenzie.png";

const InfoBar = ({ room }) => {
  const [icon, setIcon] = useState("");

  useEffect(() => {
    if (room === "bookbook") {
      setIcon(BookBookIcon);
    } else if (room === "developers") {
      setIcon(ReactIcon);
    } else if (room === "kenzie") {
      setIcon(KenzieIcon);
    }
  }, [room]);

  return (
    <InfoBarBox>
      <LeftInnerContainer>
        <OnlineIcon src={icon} alt="icone" />
        <h3>{room}</h3>
      </LeftInnerContainer>
      <RightInnerContainer>
        <a href="/join">
          <CloseIcon />
        </a>
        <a href="/explorar">
          <ExplorerIcon />
        </a>
      </RightInnerContainer>
    </InfoBarBox>
  );
};

export default InfoBar;

const InfoBarBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #a0522d;
  border-radius: 4px 4px 0 0;
  height: 100px;
  width: 100%;
`;
const LeftInnerContainer = styled.div`
  flex: 0.5;
  display: flex;
  align-items: center;
  margin-left: 5%;
  color: white;

  h3 {
    font-family: "Inter", sans-serif;
    font-weight: 800;
    text-transform: uppercase;
    margin: 0;
  }
`;

const RightInnerContainer = styled.div`
  display: flex;
  flex: 0.5;
  justify-content: flex-end;
  margin-right: 4%;
  margin-top: 2%;
`;

const OnlineIcon = styled.img`
  width: 24%;
  margin-right: 5%;
  transition: 0.2s;

  &:hover {
    transform: scale(1.2);
  }
`;

const CloseIcon = styled(RiCloseLine)`
  transition: 0.2s;
  margin-right: 26px;
  color: #fff;
  transition: 0.2s;

  &:hover {
    transform: scale(1.4);
  }
`;

const ExplorerIcon = styled(FcGlobe)`
  transition: 0.2s;
  &:hover {
    transform: scale(1.8);
  }
`;
