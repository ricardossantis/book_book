import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { logout } from "../../redux/actions/session";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Menu = () => {
  const history = useHistory();
  const session = useSelector((state) => state.session);
  const dispatch = useDispatch();
  const [menuActive, setMenuActive] = useState(false)
  const handleLogout = () => {
    dispatch(logout(history));
  };

  return (
    <Header>
      <BoxMenu  >
        {session.token ?
          (
            <>
              <DropMenu menuActive={menuActive}>
                <BoxIcon onClick={() => setMenuActive(!menuActive)} >
                  <Hamburguer menuActive={menuActive}></Hamburguer>
                </BoxIcon>
                <DropDiv menuActive={menuActive}>
                  {session.token &&
                    <>
                      <DropLink menuActive={menuActive} to="/explorer">Explorar</DropLink>
                      <DropLink menuActive={menuActive} to="/pesquisa">Buscar</DropLink>
                      <DropLink menuActive={menuActive} to={`/perfil/${session.user.id}`}>Perfil</DropLink>
                    </>
                  }
                </DropDiv>
              </DropMenu>

              <Link to="/logar" onClick={handleLogout}>
                | SAIR
          </Link>
            </>
          ) : (
            <>
              <Link to="/logar">Login</Link>
              <Link to="/cadastro">Cadastro</Link>
            </>
          )}
      </BoxMenu>
    </Header>
  );
};

export default Menu;

const DropMenu = styled.div`
width:80px;
height:50px;
transition: 0.3s;
/* ${({ menuActive }) => menuActive && `
height:500px;
width:200px;
position:absolute;
`} */

`
const DropDiv = styled.div`
width:1px;
height:1px;
background:black;
transition: 0.3s ;
visibility:hidden;
background:green;
display:flex;
justify-content:center;
align-items:center;
flex-flow:column;

${({ menuActive }) => menuActive && `
visibility:visible;
height:500px;
width:200px;
position:absolute;
`}
`
const DropLink = styled(Link)`
visibility:hidden;

${({ menuActive }) => menuActive && `
visibility:visible;

`}
`

const BoxIcon = styled.div`
width: 80px;
height: 100%;
display:flex;
justify-content:center;
align-items:center;
position:relative;
cursor:pointer;
`

const Hamburguer = styled.div`
position:absolute;
width:40%;
height:4px;
background:#fff;
box-shadow:0 2px 5px rgba(0,0,0,.2);
${({ menuActive }) => menuActive && `
background: rgba(0,0,0,0) !important;
box-shadow:0 2px 5px rgba(0,0,0,0) !important;
`}
transition:background 0.5s ;

&:before,&:after{
content:"";
position:absolute;
width:100%;
transition:transform 0.7s ;

${({ menuActive }) => menuActive && `
 width:80%;
`}
height: 4px;
background: #fff;
box-shadow:0 2px 5px rgba(0,0,0,.2);
transition: .5s;
};

&:before{
  top:-10px;
  ${({ menuActive }) => menuActive && `
  top:0px;
   transform:rotate(45deg);
`}
};

&:after{
  bottom:-10px;
  ${({ menuActive }) => menuActive && `
    bottom:0px;
   transform:rotate(-45deg);
`}
};



`

const Header = styled.header`
background-image: linear-gradient(to right, #1A2980 0%, #26D0CE 51%, #1A2980 100%);
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
