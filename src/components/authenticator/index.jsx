import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { StyledMenu } from "../menu/styledmenu";

export default function Authenticator() {
  const [hasToken, setHasToken] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setHasToken(true);
      history.push("/timeline");
    } else {
      history.push("/login");
    }
  }, [history]);

  const logout = () => {
    localStorage.clear();
    history.push("/login");
    setHasToken(false);
  };

  if (hasToken === undefined) {
    return <div>Loading...</div>;
  }

  if (hasToken) {
    return (
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
    );
  } else if (!hasToken) {
    return (
      <StyledMenu.Section>
        <StyledMenu.item>
          <Link to="/login">Login</Link>
        </StyledMenu.item>

        <StyledMenu.item>
          <Link to="/register">Register</Link>
        </StyledMenu.item>
      </StyledMenu.Section>
    );
  }
}
