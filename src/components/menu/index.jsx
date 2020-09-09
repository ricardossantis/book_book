import React from "react";
import { Link } from "react-router-dom";
import { StyledHeader, StyledMenu } from "./styledmenu";

export default function Menu() {
  return (
    <StyledHeader>
      <StyledMenu>
        <h1>BookBook</h1>
        <StyledMenu.Section>
          <StyledMenu.item>
            <Link to="/login">Login</Link>
          </StyledMenu.item>
          <StyledMenu.item>
            <Link to="/profile">Profile</Link>
          </StyledMenu.item>
          <StyledMenu.item>
            <Link to="/register">Register</Link>
          </StyledMenu.item>
          <StyledMenu.item>
            <Link to="/shelves">Shelves</Link>
          </StyledMenu.item>
          <StyledMenu.item>
            <Link to="/timeline">Timeline</Link>
          </StyledMenu.item>
        </StyledMenu.Section>
      </StyledMenu>
    </StyledHeader>
  );
}
