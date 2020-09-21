import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import { deleteBook, updateBook } from "../../redux/actions/books";
import Feedback from "../modals/feedback";

const Book3D = ({ book, image }) => {

  const dispatch = useDispatch();
  const [modal, setModal] = useState();
  const user = useParams();

  return (
    <Container>
      <BookContainer>
        <BookBox image={image}>
          <img src={image} alt="imagem do livro" />
        </BookBox>
      </BookContainer>
    </Container>
  );
};

export default Book3D;

const Container = styled(motion.div)`
display:flex;
justify-content:center;
align-items:center;
flex-flow:column;
width:100%;
height: 100%;
margin: 0 10px 0 10px;
*{
margin:0;
padding:0;
box-sizing:border-box;
}
`

const BookContainer = styled(motion.div)`
display:flex;
justify-content:center;
align-items:center;
transform-style:preserve-3d;
perspective:1000px;
`
const BookBox = styled.div`
position: relative;
width:4em;
height:6em;
box-shadow:20px 20px 20px rgba(0,0,0,0.2);
transform-style:preserve-3d;
transition: 1s cubic-bezier(0.23, 1, 0.32, 1);
background-repeat:no-repeat;
&:hover{
transform:rotateY(45deg);
box-shadow:0px 20px 20px rgba(0,0,0,0.2);
}
@media(min-width:600px){
&:active{
transform:rotateY(180deg);
box-shadow:0px 20px 20px rgba(0,0,0,0.2);
}
}
&:before{
    content:"";
    position:absolute;
    width:20px;
    height:100%;
    left: 0;
    transform-origin: left;
    background-position: center;
    transform: rotateY(-90deg) rotateZ(180deg);
    background-size: cover;
    background-repeat:no-repeat;
    ${({ image }) => `
      background: url(${image});
    `}

} 
&:after{
    content:"";
    position:absolute;
    width:100%;
    height:100%;
    left: 0;
    transform-origin: center;
    background-position: center;
    background-size: cover;
    background-repeat:no-repeat;
    transform: rotateY(180deg) translateZ(20px);
    ${({ image }) => `
      background: url(${image});
    `}
} 
img {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    object-fit:cover;
}
`

const Button = styled.button`
  flex: 1;
  font-size: 10px;
  color: black;
`;

const BoxButton = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  
`;
