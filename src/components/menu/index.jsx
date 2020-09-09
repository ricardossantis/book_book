import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { StyledHeader, StyledMenu } from "./styledmenu";

export default function Menu() {
  const history = useHistory();
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setHasToken(true);
      history.push("/timeline");
    } else {
      history.push("/login");
    }
  }, [history]);

  return (
    <StyledHeader>
      <StyledMenu>
        <h1>BookBook</h1>
        {hasToken ? (
          <StyledMenu.Section>
            <StyledMenu.item>
              <Link to="/profile">Profile</Link>
            </StyledMenu.item>

            <StyledMenu.item>
              <Link to="/shelves">Shelves</Link>
            </StyledMenu.item>

            <StyledMenu.item>
              <Link to="/timeline">Timeline</Link>
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
