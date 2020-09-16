import React from "react";
import { Link, useHistory } from "react-router-dom";

import { StyledHeader, StyledMenu } from "./styledmenu";
import { clearAllState } from "../../redux/actions/session";

import { useDispatch, useSelector } from "react-redux";

const Menu = () => {
  const history = useHistory();
  const session = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearAllState(history));
  };

  return (
    <StyledHeader>
      <StyledMenu>
        <StyledMenu.Title>
          BookBook <p> MVC VERSION</p>
        </StyledMenu.Title>
        {session.token ? (
          <StyledMenu.Section>
            <StyledMenu.item>
              <Link to="/explorar">Linha do Tempo</Link>
            </StyledMenu.item>

            <StyledMenu.item>
              <Link to="/pesquisa">Buscar</Link>
            </StyledMenu.item>

            <StyledMenu.item>
              <Link to={`/perfil/${session.user.id}`}>Perfil</Link>
            </StyledMenu.item>

            <StyledMenu.item>
              <Link to="/logar" onClick={handleLogout}>
                | SAIR
              </Link>
            </StyledMenu.item>
          </StyledMenu.Section>
        ) : (
          <StyledMenu.Section>
            <StyledMenu.item>
              <Link to="/logar">Login</Link>
            </StyledMenu.item>

            <StyledMenu.item>
              <Link to="/cadastro">Cadastro</Link>
            </StyledMenu.item>
          </StyledMenu.Section>
        )}
      </StyledMenu>
    </StyledHeader>
  );
};

export default Menu;
