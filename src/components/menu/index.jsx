import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

import { StyledHeader, StyledMenu } from "./styledmenu";
import { setLogout } from "../../redux/actions/sessionActions";

import { useDispatch, useSelector } from "react-redux";

export default function Menu() {
  const history = useHistory();
  const token = useSelector((state) => state.session.token);
  const dispatch = useDispatch();

  useEffect(() => {
    if (token) {
      history.push("/timeline");
    } else {
      history.push("/login");
    }
  });

  const handleLogout = () => {
    dispatch(setLogout(history));
  };

  return (
    <StyledHeader>
      <StyledMenu>
        <StyledMenu.Title>
          BookBook <p> MVC VERSION</p>
        </StyledMenu.Title>
        {token ? (
          <StyledMenu.Section>
            <StyledMenu.item>
              <Link to="/search">Search</Link>
            </StyledMenu.item>

            <StyledMenu.item>
              <Link to="/shelves">Shelves</Link>
            </StyledMenu.item>

            <StyledMenu.item>
              <Link to="/timeline">Reviews</Link>
            </StyledMenu.item>

            <StyledMenu.item>
              <StyledMenu.SubMenu>
                <StyledMenu.SubMenu.Options>
                  Options
                  <StyledMenu.SubMenu>
                    <StyledMenu.SubMenu.Link>
                      <Link to="/profile">PERFIL</Link>
                    </StyledMenu.SubMenu.Link>

                    <StyledMenu.SubMenu.Link onClick={handleLogout}>
                      LOGOUT
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
