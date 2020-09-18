import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { clearAllState } from "../../redux/actions/session";

import { useDispatch, useSelector } from "react-redux";
import { IoIosLogOut } from "react-icons/io"
import styled from "styled-components";

import ProfileImg from '../../assets/img/cardProfile.svg'

const Menu = ({ children }) => {
  const history = useHistory();
  const session = useSelector((state) => state.session);

  const dispatch = useDispatch();
  const [menuActive, setMenuActive] = useState(false)
  const handleLogout = () => {
    dispatch(clearAllState(history));
  };

  return (
    <>
      <Header>
        <BoxMenu>
          <DropMenu menuActive={menuActive} onMouseLeave={() => setMenuActive(false)} onMouseEnter={() => setMenuActive(true)}>
            <BoxIcon onClick={() => setMenuActive(true)} >
              <Hamburguer menuactive={menuActive}></Hamburguer>
            </BoxIcon>
            <DropDiv menuactive={menuActive}>
              <DropLink menuactive={menuActive} to="/explorar">Explorar</DropLink>
              <DropLink menuactive={menuActive} to="/pesquisa">Buscar</DropLink>
              <DropLink menuactive={menuActive} to={`/perfil/${session.user.id}`}>Perfil</DropLink>
            </DropDiv>
          </DropMenu>
          <ProfileBox>
            <Profile>
              <ProfilePic />
            </Profile>
            <Logout to="/" onClick={handleLogout}>
              <IoIosLogOut />
            </Logout>
          </ProfileBox>
        </BoxMenu>
      </Header>
      { children}
    </>
  );
};

export default Menu;

const ProfileBox = styled.div`
width: 200px;
height: 100%;
display: flex;
align-items: center;
justify-content:space-between;
`
const Profile = styled.div`
position:relative;
flex:1;
height: 100%;
display: flex;
align-items: center;
justify-content:center;
`

const ProfilePic = styled.div`
border-radius:50%;
width:35px;
height:35px;
background-image: url(${ProfileImg});
background-size:102%;
background-position:center;
`
const Logout = styled(Link)`
flex:1;
height: 100%;
display: flex;
align-items: center;
justify-content:center;
text-decoration:none;
color: white;
&:hover{
  color: rgb(30,180,140);
}
svg{
  transition:0.2s;
  width: 50%;
  height: 60%;
  border-radius:2px;
&:hover{
  width: 60%;
  height: 70%;
  border: 1px solid  rgba(200,200,200,.2);
  border-bottom:4px solid rgba(0,0,0,0.2);
  background:rgba(255,255,255,0.2);
  color: rgb(30,180,140);
}
}
`
const Header = styled.header`
  background-image: linear-gradient(to right, #F09819 0%, #EDDE5D 51%, #F09819 100%);
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content:space-between;
  `;

const BoxMenu = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;

const DropMenu = styled.div`
width:80px;
height:50px;
transition: 0.3s;
margin-left: 10px;
`

const DropDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-flow:column;
width:18%;
max-width:200px;
height:0px;
left:30px;
visibility:hidden;
position:absolute;
clip-path: polygon(100% 100%, 0% 100%, 0 6%, -1% 6%, 7.5% 0, 20% 6%, 100% 6%);
background-image:radial-gradient( rgb(70,70,70) ,rgb(22,22,22) );
transition: 0.4s 0s;
border-radius: 4px;
${({ menuactive }) => menuactive && `
visibility:visible;
height:250px;
width:200px;
`}
`
const DropLink = styled(Link)`
font-weight:bold;
font-family: "Roboto";
font-size:0px;
visibility:hidden;
display:block;
width: 100%;
height: 0px;
margin:10px;
display:flex;
justify-content:center;
align-items:center;
transition: 0.1s;
${({ menuactive }) => menuactive && `
visibility:visible;
height: 40px;
font-size:20px;
`}

&:hover{
  border-top:4px solid rgba(10,10,10,0.2);
  border-bottom:4px solid rgba(80,80,80,0.2);
  background:rgba(20,20,20,0.2);
font-size:25px;

}
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
text-align: initial;
${({ menuactive }) => menuactive && `
background: rgba(0,0,0,0) !important;
box-shadow:0 2px 5px rgba(0,0,0,0) !important;
`}
transition:background 0.5s ;

&:before,&:after{
content:"";
position:absolute;
width:100%;
transition:transform 0.7s ;
background:white;

${({ menuactive }) => menuactive && `
 width:80%;
 background:rgb(30,180,140);
`}
height: 4px;
box-shadow:0 3px 8px rgba(0,0,0,.2);
transition: .5s;
};

&:before{
  top:-10px;
  ${({ menuactive }) => menuactive && `
  top:0px;
   transform:rotate(45deg);
`}
};

&:after{
  bottom:-10px;
  ${({ menuactive }) => menuactive && `
    bottom:0px;
   transform:rotate(-45deg);
`}
};
`
