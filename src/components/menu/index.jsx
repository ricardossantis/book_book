import React from "react";
import { Link } from "react-router-dom";

import { StyledHeader, StyledMenu } from "./styledmenu";
import { logout } from "../../redux/actions/session";

import { useSelector } from "react-redux";

export default function Menu() {
  const token = useSelector((state) => state.session.token) ? true : false;

  return (
    <StyledHeader>
      <StyledMenu>
        <h1>BookBook</h1>

        {token ? (
          <StyledMenu.Section>
            <StyledMenu.item>
              <Link to="/search">Search</Link>
            </StyledMenu.item>

            <StyledMenu.item>
              <Link to="/shelves">Shelves</Link>
            </StyledMenu.item>

            <StyledMenu.item>
              <Link to="/">Review</Link>
            </StyledMenu.item>
            <StyledMenu.item>
              <StyledMenu.SubMenu>
                <StyledMenu.SubMenu.Options>
                  Options
                  <StyledMenu.SubMenu>
                    <StyledMenu.SubMenu.Link>
                      <Link to="/profile">Profile</Link>
                    </StyledMenu.SubMenu.Link>

                    <StyledMenu.SubMenu.Link onClick={logout}>
                      Logout
                    </StyledMenu.SubMenu.Link>
                  </StyledMenu.SubMenu>
                </StyledMenu.SubMenu.Options>
              </StyledMenu.SubMenu>
            </StyledMenu.item>
          </StyledMenu.Section>
        ) : (
          <StyledMenu.Section>
            <StyledMenu.item>
              <Link to="/login">Login</Link>
            </StyledMenu.item>

            <StyledMenu.item>
              <Link to="/register">Register</Link>
            </StyledMenu.item>
          </StyledMenu.Section>
        )}
      </StyledMenu>
    </StyledHeader>
  );
}
