
import styled from "styled-components";


export const CloseSearch = styled.button`
color:rgba(22,22,50);
border-radius:24px 0 0 24px;
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content:center;
transition: 0.3s;
border:none;
outline:none;
margin-right:5px;
svg{
width: 1.4rem;
height: 1.4rem;
pointer-events:none;
}
`


export const SearchBox = styled.div`
box-sizing:content-box;
position: absolute;
right:200px;
width: 40px;
height: 30px;
display: flex;
align-items: center;
justify-content:center;
background:rgb(255,255,255,0);
border-radius:24px;
transition: 0.2s;

${({ hover }) => hover && `
border-radius:40px;
background:rgb(255,255,255,1);
margin-left:0px;
width: 20%;
height: 30px;
`}
${({ focus }) => focus && `
border:3px solid rgba(10,100,40,0.5);
border-right: 4px solid rgba(10,100,40,0.5); 

`}
`
export const SearchButton = styled.div`

color:rgba(22,22,50);
background:rgb(255,255,255,1);
width: 30px;
height: 30px;
display: flex;
align-items: center;
justify-content:center;
border-radius:50%;
transition: 0.3s;

svg{
width: 1.2rem;
height: 1.2rem;
${({ hover }) => hover && `
width: 1.1rem;
height: 1.1rem;
`}
}
${({ hover }) => hover && `
border-radius:0 24px 24px 0 ;
margin-left:0px;
width: 50%;
height: 30px;
`}

`
export const Input = styled.input`
flex:9;
width: 50%;
height: 30px;
font-size:0.8rem;

color:black;
background:rgb(255,255,255,0);
border-radius:24px 0 0 24px;
border:none;
transition: 0.4s;
${({ hover }) => hover && `
background:rgb(255,255,255,1);

`}
&:focus{
  outline: none;
}

`
