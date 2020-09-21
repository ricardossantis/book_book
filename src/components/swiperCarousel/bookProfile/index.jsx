import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import BookBlank from "../../../assets/img/book-blank.png";
import { AiOutlineForm, AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { BsBookmarkPlus, BsBookmarkFill, BsBookmarkCheck } from 'react-icons/bs';
import { deleteBook, updateBook } from "../../../redux/actions/books";
import Book3D from "../../book"
import { useParams } from "react-router-dom"

const CardSearch = ({ book }) => {
  const dispatch = useDispatch()
  const userId = useSelector((state) => state.session.user.id)
  const [infos, setInfos] = useState(false)
  const [hover, sethover] = useState(true)
  const user = useParams();

  const changeShelf = (shelf) => {
    dispatch(updateBook({ book: { shelf: shelf } }, user, book));
  };

  return (
    <Container onClick={() => hover && setInfos(!infos)} onMouseLeave={() => setInfos(false)}>
      <Book>
        <BookImg
          src={book.image_url ? book.image_url : BookBlank}
          alt="book-image"
        />
      </Book>
      <ContentBox infos={infos} >

        {infos && window.innerWidth > 732 &&
          <Book3D
            book={book}
            image={book.image_url ? book.image_url : BookBlank}
          />
        }
        <Content infos={infos}>
          <Title infos={infos}>{book.title}</Title>
          <BookInfos infos={infos}>
            <Infos>
              <AiOutlineForm />
              {book.author}
            </Infos>
          </BookInfos>
          <ButtonBox infos={infos} showButtons={!(userId === Number(user.id))}>
            <Button
              onMouseLeave={() => { sethover(true) }}
              onMouseOver={() => { sethover(false) }}
              onClick={() => { changeShelf(1) }}>
              <BsBookmarkPlus />
              <p>Quero ler</p>
            </Button>
            <Button
              onMouseLeave={() => { sethover(true) }}
              onMouseOver={() => sethover(false)}
              onClick={() => { changeShelf(2) }}>
              <BsBookmarkFill />
              <p>Lendo</p>
            </Button>
            <Button
              onMouseLeave={() => sethover(true)}
              onMouseOver={() => sethover(false)}
              onClick={() => { changeShelf(3) }}>
              <BsBookmarkCheck />
              <p>Lido</p>
            </Button>
            <Button onClick={() => dispatch(deleteBook({ user, book }))}>
              <AiOutlineDelete />
              <p>Deletar</p>
            </Button>
          </ButtonBox>
        </Content>
      </ContentBox>
    </Container >
  );
};

export default CardSearch;

export const Container = styled.div`
width: 100%;
height: 100%;
`;

export const ButtonBox = styled.div`
width: 0%;
height: 0px;
display:flex;
justify-content:start;
align-items:center;
align-self:end;
margin:auto 0 10px 0;
opacity:0;
transition:0s;
${({ showButtons }) => showButtons && `
visibility:hidden;
`}

${({ infos }) => infos && `
  opacity:1;
  width: 100%;
  height: 50px;

div{
  transition:0.2s;
  width:25px;
  height:25px;
}
@media(min-width:732px){
  div{
  transition:0.2s;
  width: 30px;
  height: 30px;
}
}
  `}

  a{
    color:white;
  }
  a:hover{
    color:white;
  }
 
  `;

export const Button = styled.div`
position:relative;
width: 0px;
height: 0px;
background-color:var(--color-secondary-2-3);
border-radius:30%;
margin: 0 5px 0 5px;
display:flex;
justify-content:center;
align-items:center;
transition:0s;
p{
  display:none;
}
svg{
  transition:0.2s;
  width: 15px;
  height: 15px;
}
@media(min-width:732px){
margin: 0 5px 0 5px;

  &:hover{
  border-radius:10%;
  width: 65px;
  height: 45px;
  padding:5px;
  background-color:var(--color-secondary-2-2);
}
svg{
  transition:0.2s;
  width: 25px;
  height: 25px;
}
p{
  position:absolute;
  margin:0;
  right:0;
  width:2px;
  font-size:0px;
  font-weight:bold;
  height: 100%;
  visibility:hidden;
  transition:0.2s;
  display:flex;
  justify-content:center;
  align-items:center;
}
&:hover p{
  font-size:8px;
  transition:0.2s 0.1s;
  width:30px;
  visibility:visible;

}
&:hover svg{
transform:translateX(-60%)
}
    }
`;


export const Book = styled.div`
  width:100%;
  height:100%;
  background: #222222;
  border-radius: 4px;
`;

export const BookImg = styled.img`
  width:100%;
  height:100%;
  background: #222222;
  border-radius: 4px;
`;

export const ContentBox = styled.div`
  position: absolute;
  display:flex;
  flex-flow:column;
  top: 0;
  left: 0;
  background:var(--color-secondary-2-3);
  border-radius: 5px;
  width: 0px;
  height: 320px;
  transition:0.3s;
  display: flex;
  visibility:hidden;

${({ infos }) => infos && `
    transition:0.2s;
    visibility:visible;
    transition:0.2s 0.2s;
    width:150%;
    height: 100%;
    @media(min-width:732px){
      width: 400px;
      height: 300px;
    }
  `}
  @media(min-width:732px){
    flex-flow:row;
  }
`;

export const InnerImage = styled.img`
  min-width:100%;
  height:100%;
  background: #222222;
  border-radius: 4px;
  margin: 6px;
`;

export const Content = styled.div`
  width: 0%;
  height: 100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-flow: column;

  ${({ infos }) => infos && `
    width: 100%;
    height: 100%;
  `}
`;

export const Title = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 0rem;
  color: #fff;
  line-height: 1.6rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  margin: 12px 16px;
  margin-bottom: 1px;
  margin-left: 10px;
  align-self: flex-start;
  
${({ infos }) => infos && `
   transition:0.2s;
   font-size: 0.75rem;
   @media(min-width:732px){
    font-size: 1.2rem;
    -webkit-line-clamp: 2;
   }

  `}
`;

export const BookInfos = styled.div`
  align-self: flex-start;
  font-size:0rem;
  height: 0px;
  display: flex;
  justify-content: center;
  flex-flow:column;
  margin: 2px 0 2px 2px;
  
${({ infos }) => infos && `
  transition:0.2s;
  align-self: flex-start;
  font-size:0.6rem;
  height: 25px;
  @media(min-width:732px){
    font-size:0.8rem;
    margin: 20px 0 20px 10px;
   }
  `}

`;
export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  svg{
   margin: 0 5px 0 5px;
 }
`


export const Description = styled.p`
  max-width: 90%;
  font-family: "Inter", sans-serif;
  font-size: 0rem;
  color: #fff;
  line-height: 0.1rem;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  margin: 6px 20px;
  margin-bottom: 1px;
  margin-left: 10px;
  align-self: flex-start;
  
${({ infos }) => infos && `
transition:0.2s;
  font-size: 0.65rem;
  line-height: 0.65rem;
  @media(min-width:732px){
    font-size: 0.9rem;
    line-height: 1.2rem;
   }
  `}
`;
