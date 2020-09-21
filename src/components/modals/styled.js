import styled from "styled-components";
import Select from "react-select";
import { Button } from "antd";

export const ShadowBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.2);
  position: fixed;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledModal = styled.div`
  z-index: 20;
  width: 70vw;
  height:98vh;
  position: fixed;
  border-radius:10px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #CC8C68;
  padding: 30px;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-flow:column;

  form{
    width: 50vw;
  height:80vh;
  }

  @media(min-width:600px){
  width: 25vw;
  height:80vh;

  form{
    width: 80%;
  height:100%;
  }
}
`;

export const StyledSelect = styled(Select)`
  .css-g1d714-ValueContainer {
    height: 55px;
    justify-content: center;
  }
`;


export const Title = styled.div`
width: 100%;
height: 10px;
transform:translateY(-150%);
color: white;
font-family:"Winter", sans-serif;
font-weight:bold;
`
export const StyledButton = styled(Button)`
font-family:"Winter", sans-serif;
font-weight:bold;
border-radius:6%;
background:none;
border:none;  
transform:translate(50%,-180%);

svg{
  width:30px;
  height:30px;
}

&:hover{
  background:none;
}

@media(min-width:600px){
  transform:translate(50%,-80%);

}
`
export const BoxClose = styled.div`
width: 100%;
height: 2px;
display:flex;
justify-content:flex-end;
align-items:flex-start;
@media(min-width:600px){
  width: 100%;
height: 50px;
}
`
