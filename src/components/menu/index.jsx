import React from "react";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../redux/actions/session";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Menu = () => {
  const history = useHistory();
  const session = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout(history));
  };

  return (
    <Header>
      <BoxMenu>
        <Title>
          BookBook <p> MVC VERSION</p>
        </Title>
        {session.token ? (
          <ContainerLinks>
            <BoxLink>
              <Link to="/explorer">Explorar</Link>
            </BoxLink>

            <BoxLink>
              <Link to="/pesquisa">Buscar</Link>
            </BoxLink>

            <BoxLink>
              <Link to={`/perfil/${session.user.id}`}>Perfil</Link>
            </BoxLink>

            <BoxLink>
              <Link to="/logar" onClick={handleLogout}>
                | SAIR
          </Link>
            </BoxLink>
          </ContainerLinks>
        ) : (
            <ContainerLinks>
              <BoxLink>
                <Link to="/logar">Login</Link>
              </BoxLink>

              <BoxLink>
                <Link to="/cadastro">Cadastro</Link>
              </BoxLink>
            </ContainerLinks>
          )}
      </BoxMenu>
    </Header>
  );
};

export default Menu;

const Header = styled.header`
  background-color:rgb(195,195,195);
  width: 100%;
  height: 50px;
  
`;
const BoxMenu = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  display: flex;
  font-family: Roboto;
  font-weight: 700;
  font-size: 1rem;
  margin: 0 10px;

  p {
    font-size: 0.3rem;
    transform:translate(-50%)
  }
`;

const BoxLink = styled.div`
  flex:1;
  font-family: Roboto;
  font-weight: 700;
  font-size: 0.7rem;
 margin:0 5px;
  &:last-child {
    margin-right: 20px;
  }
  a:hover {
    color: #1c2833;
  }
`;
const ContainerLinks = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
