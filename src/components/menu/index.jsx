import React from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { clearAllState } from "../../redux/actions/session";
import { useDispatch } from "react-redux";
import { IoIosLogOut } from "react-icons/io";

import styled from "styled-components";

import ProfileImg from "../../assets/img/cardProfile.svg";
import DropDownMenu from "../dropMenu";
import SearchInput from "../SearchInput";

const Menu = ({ children }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { pathname } = useLocation();
  const handleLogout = () => {
    dispatch(clearAllState(history));
  };

  return (
    <>
      <Header>
        <BoxMenu>
          <DropDownMenu />
          {!pathname.match("perfil") && <SearchInput />}
          <ProfileBox>
            <Profile>
              <ProfilePic />
            </Profile>
            <Logout to="/" onClick={handleLogout}>
              <IoIosLogOut />
            </Logout>
          </ProfileBox>
        </BoxMenu>
      </Header>
      {children}
    </>
  );
};

export default Menu;

const ProfileBox = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (min-width: 600px) {
    width: 200px;
  }
`;
const Profile = styled.div`
  position: relative;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProfilePic = styled.div`
  border-radius: 50%;
  width: 35px;
  height: 35px;
  background-image: url(${ProfileImg});
  background-size: 102%;
  background-position: center;
  transition: 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;
const Logout = styled(Link)`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  &:hover {
    color: rgb(30, 180, 140);
  }
  svg {
    transition: 0.2s;
    width: 50%;
    height: 60%;
    border-radius: 2px;
    &:hover {
      width: 60%;
      height: 70%;
      border: 1px solid rgba(200, 200, 200, 0.2);
      border-bottom: 4px solid rgba(0, 0, 0, 0.2);
      background: rgba(255, 255, 255, 0.2);
      color: rgb(30, 180, 140);
    }
  }
`;
const Header = styled.header`
  background-image: linear-gradient(
    to right,
    #f09819 0%,
    #edde5d 51%,
    #f09819 100%
  );
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BoxMenu = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
