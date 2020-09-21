import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import BookBlank from "../../../assets/img/book-blank.png";
import { AiOutlineForm, AiOutlineGoogle } from 'react-icons/ai';
import { IoMdBusiness } from 'react-icons/io';
import { BsBookmarkPlus, BsBookmarkFill, BsBookmarkCheck } from 'react-icons/bs';
import { getBooks, updateBook } from "../../../redux/actions/books";
import Book3D from "../../book"
import api from "../../../services/api";


const CardSearch = ({ book }) => {
  const dispatch = useDispatch()
  const [userInfo, userBooks] = useSelector((state) => [state.session, state.books.books])
  const [infos, setInfos] = useState(false)
  const [hover, sethover] = useState(true)

  const handleBookClick = (
    shelf,
    {
      volumeInfo: {
        title,
        authors = ["Desconhecido"],
        imageLinks = "",
        categories = [],
      },
      id,
    }
  ) => {
    const bookInfo = {
      book: {
        title: title,
        author: authors.join(","),
        shelf: shelf,
        image_url: imageLinks.thumbnail,
        grade: "",
        categories: categories.join(","),
        review: "",
        google_book_id: id,
      },
    };

    const filteredTitle = userBooks.filter(
      (book) => book.title === bookInfo.book.title
    );
    console.log(bookInfo);
    if (filteredTitle.length === 0) {
      api
        .post(`/users/${userInfo.user.id}/books/`, bookInfo, {
          headers: { authorization: userInfo.token },
        })
        .catch((err) => console.log(err));
      dispatch(getBooks(userInfo));
    } else {
      let filteredShelf = filteredTitle.filter(
        (book) => book.shelf === bookInfo.book.shelf
      );
      if (filteredShelf.length === 0) {
        dispatch(
          updateBook(
            { book: { shelf: shelf } },
            userInfo.user,
            filteredTitle[0]
          )
        );
      } else {
        console.log("book already added");
      }
    }
  };

  const {
    title,
    publisher,
    description,
    authors = [],
    infoLink,
    imageLinks = { thumbnail: BookBlank } }
    = book.volumeInfo

  return (
    <Container onClick={() => hover && setInfos(!infos)} onMouseLeave={() => setInfos(false)}>
      <Book>
        <BookImg
          src={imageLinks.thumbnail}
          alt="book-image"
        />
      </Book>
      <ContentBox infos={infos} >

        {infos && window.innerWidth > 732 &&
          <Book3D
            book={book}
            image={imageLinks.thumbnail ? imageLinks.thumbnail : BookBlank}
          />
        }
        <Content infos={infos}>
          <Title infos={infos}>{title}</Title>
          <BookInfos infos={infos}>
            <Infos>
              <AiOutlineForm />
              {authors[0]}
            </Infos>
            <Infos>
              <IoMdBusiness />
              {publisher}</Infos>
          </BookInfos>
          <Description infos={infos}>{description ? description : "Sem descrição"}</Description>
          <ButtonBox infos={infos}>
            <Button
              onMouseLeave={() => { sethover(true) }}
              onMouseOver={() => { sethover(false) }}
              onClick={() => { handleBookClick(1, book) }}>
              <BsBookmarkPlus />
              <p>Quero ler</p>
            </Button>
            <Button
              onMouseLeave={() => { sethover(true) }}
              onMouseOver={() => sethover(false)}
              onClick={() => { handleBookClick(2, book) }}>
              <BsBookmarkFill />
              <p>Lendo</p>
            </Button>
            <Button
              onMouseLeave={() => sethover(true)}
              onMouseOver={() => sethover(false)}
              onClick={() => { handleBookClick(3, book) }}>
              <BsBookmarkCheck />
              <p>Lido</p>
            </Button>
            <a href={infoLink} target="_blank" rel="noopener noreferrer">
              <Button >
                <AiOutlineGoogle />
                <p>Mais sobre</p>
              </Button>
            </a>
          </ButtonBox>
        </Content>
      </ContentBox>
    </Container>
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
  width: 40px;
  height: 40px;
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
  width: 80px;
  height: 50px;
  padding:5px;
  background-color:var(--color-secondary-2-2);
}
svg{
  transition:0.2s;
  width: 30px;
  height: 30px;
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
  font-size:11px;
  transition:0.2s 0.1s;
  width:40px;
  visibility:visible;

}
&:hover svg{
transform:translateX(-80%)
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
      width: 560px;
      height: 320px;
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
