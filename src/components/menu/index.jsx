import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { clearAllState } from "../../redux/actions/session";
import { useDispatch } from "react-redux";
import DropDownMenu from "./dropMenu";
import SearchInput from "./SearchInput";
import { IoIosLogOut } from "react-icons/io";
import {
  Header,
  BoxMenu,
  ProfileBox,
  Profile,
  ProfilePic,
  Logout,
} from "./styled";

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
          {pathname.match("pesquisa") && <SearchInput />}
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
