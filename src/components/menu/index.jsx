import React from "react";
import { Link, useHistory } from "react-router-dom";

import { StyledHeader, StyledMenu } from "./styledmenu";
import { setLogout } from "../../redux/actions/sessionActions";

import { useDispatch, useSelector } from "react-redux";

export default function Menu() {
  const history = useHistory();
  const token = useSelector((state) => state.session.token);
  const dispatch = useDispatch();

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
              <Link to="/search">Buscar</Link>
            </StyledMenu.item>

            <StyledMenu.item>
              <Link to="/shelves">Prateleiras</Link>
            </StyledMenu.item>

            <StyledMenu.item>
              <Link to="/timeline">Linha do Tempo</Link>
            </StyledMenu.item>

            <StyledMenu.item>
              <Link to="/profile">Perfil</Link>
            </StyledMenu.item>

            <StyledMenu.item>
              <Link to="/login" onClick={handleLogout}>
                | SAIR
              </Link>
            </StyledMenu.item>
          </StyledMenu.Section>
        ) : (
            <StyledMenu.Section>
              <StyledMenu.item>
                <Link to="/login">Login</Link>
              </StyledMenu.item>

              <StyledMenu.item>
                <Link to="/register">Cadastro</Link>
              </StyledMenu.item>
            </StyledMenu.Section>
          )}
      </StyledMenu>
    </StyledHeader>
  );
}
