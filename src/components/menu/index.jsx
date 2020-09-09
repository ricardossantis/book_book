import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { StyledHeader, StyledMenu } from "./styledmenu";

export default function Menu() {
  const history = useHistory();
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(history);
    if (token) {
      setHasToken(true);
      history.push("/timeline");
    } else {
      history.push("/login");
    }
  }, [history, history.location.pathname]);

  const logout = () => {
    localStorage.clear();
    setHasToken(false);
    history.push("/login");
  };

  return (
    <StyledHeader>
      <StyledMenu>
        <h1>BookBook</h1>
        {hasToken ? (
          <StyledMenu.Section>
            <StyledMenu.item>
              <Link to="/search">Search</Link>
            </StyledMenu.item>

            <StyledMenu.item>
              <Link to="/shelves">Shelves</Link>
            </StyledMenu.item>

            <StyledMenu.item>
              <Link to="/timeline">Timeline</Link>
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
