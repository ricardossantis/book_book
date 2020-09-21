import styled from "styled-components";
import { Link } from "react-router-dom";

export const DropMenu = styled.div`
width:80px;
height:50px;
transition: 0.3s;
margin-left: 10px;
`

export const DropDiv = styled.div`
position:absolute;
width:18%;
z-index:10;
padding: 30px 0 10px 0;
display:flex;
justify-content:center;
align-items:center;
flex-flow:column;
max-width:200px;
height:0px;
left:30px;
visibility:hidden;
clip-path: polygon(100% 100%, 0% 100%, 0 6%, 0.2% 6%, 7.5% 0, 20% 6%, 100% 6%);
background-image:radial-gradient( 
  var(--color-primary-0)
  ,var(--color-primary-3));
transition: 0.4s 0s;
border-radius: 4px;

${({ menuactive }) => menuactive && `
visibility:visible;
height:250px;
width:200px;
`}
`
export const DropLink = styled(Link)`
font-weight:bold;
font-family: "Roboto";
font-size:0px;
visibility:hidden;
display:block;
width: 100%;
height: 0px;
margin:10px;
display:flex;
color:rgba(0,0,0,0.8);
justify-content:center;
align-items:center;
transition: 0.1s;
${({ menuactive }) => menuactive && `
visibility:visible;
height: 40px;
font-size:20px;
`}

&:hover{
  /* border-top:4px solid rgba(10,10,10,0.2); */
  /* border-bottom:4px solid rgba(80,80,80,0.2); */
  background:rgba(20,20,20,0.2);
  font-size:25px;
  color: var(--color-complement-1);
}
`

export const Hamburguer = styled.div`
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
transition:background 0.5s;

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
export const BoxIcon = styled.div`
width: 80px;
height: 100%;
display:flex;
justify-content:center;
align-items:center;
position:relative;
cursor:pointer;
`
