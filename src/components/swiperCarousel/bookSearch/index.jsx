import React from "react";
import styled from "styled-components";
import BookBlank from "../../../assets/img/book-blank.png";
import { AiOutlineForm, AiOutlineGoogle } from 'react-icons/ai';
import { IoMdBusiness } from 'react-icons/io';
import { BsBookmarkPlus, BsBookmarkFill, BsBookmarkCheck } from 'react-icons/bs';


const CardSearch = ({ book: { volumeInfo } }) => {
  console.log(volumeInfo)

  // #### Card
  // - pageCount -  book.volumeInfo.pageCount 
  // - language -  book.volumeInfo.language 
  // - infoLink - book.volumeInfo.infoLink - importante 
  const {
    title,
    publisher,
    description,
    authors,
    pageCount,
    language,
    infoLink,
    imageLinks }
    = volumeInfo

  return (
    <>
      <Book>
        <BookImg
          src={imageLinks.thumbnail ? imageLinks.thumbnail : BookBlank}
          alt="book-image"
        />
      </Book>

      <>
        <ContentBox>
          <InnerImage
            src={imageLinks.thumbnail ? imageLinks.thumbnail : BookBlank}
            alt="book"
          />
          <Content>
            <Title>{title}</Title>
            <BookInfos>
              <Infos>
                <AiOutlineForm />
                {authors[0]}
              </Infos>
              <Infos>
                <IoMdBusiness />
                {publisher}</Infos>
            </BookInfos>
            <Description>{description}</Description>
            <ButtonBox>
              <Button >
                <BsBookmarkPlus />
                <p>Quero ler</p>
              </Button>
              <Button>
                <BsBookmarkFill />
                <p>Lendo</p>
              </Button>
              <Button>
                <BsBookmarkCheck />
                <p>Lido</p>
              </Button>
              <Button >
                <AiOutlineGoogle />
                <p>Mais sobre</p>
              </Button>
            </ButtonBox>
          </Content>
        </ContentBox>
      </>
    </>
  );
};

export default CardSearch;

export const ButtonBox = styled.div`
width: 100%;
height: 50px;
display:flex;
justify-content:start;
align-items:center;
margin-top:30px;
`;

export const Button = styled.div`
position:relative;
width: 40px;
height: 30px;
background:#1e2738;
border-radius:30%;
margin: 0 10px 0 10px;
display:flex;
justify-content:center;
align-items:center;
transition:0.2s;
&:hover{
  border-radius:10%;
  width: 80px;
  height: 35px;
  padding:5px;
  
}
svg{
  transition:0.2s;
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

`;


export const Book = styled.div`
  width: 200px;
  height: 310px;
  background: #222222;
  border-radius: 4px;
`;

export const BookImg = styled.img`
  width: 200px;
  height: 310px;
  background: #222222;
  border-radius: 4px;
`;

export const ContentBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #181818;
  border-radius: 5px;
  width: 200px;
  height: 310px;
  display: flex;
  opacity: 0;
  transition:0.2s;

  &:hover {
    transition:0.2s 0.4s;
    opacity: 1;
    width: 560px;
    height: 320px;
  }
`;

export const InnerImage = styled.img`
  min-width: 200px;
  height: 310px;
  background: #222222;
  border-radius: 4px;
  margin: 6px;
`;

export const Content = styled.div`
  width: 100%;

  display: flex;
  height: 100%;
  flex-direction: column;
  align-self: flex-start;
`;

export const Title = styled.p`
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 1.2rem;
  color: #fff;
  line-height: 1.6rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  margin: 12px 16px;
  margin-bottom: 1px;
  margin-left: 10px;
  align-self: flex-start;
`;

export const BookInfos = styled.div`
  align-self: flex-start;
  font-size:0.8rem;
  height: 25px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-flow:column;
  margin: 20px 0 20px 10px;
  

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
  font-size: 0.9rem;
  color: #fff;
  line-height: 1.2rem;
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
`;


// const handleBookClick = (
//   shelf,
//   {
//     volumeInfo: {
//       title,
//       authors = ["Desconhecido"],
//       imageLinks = "",
//       categories = [],
//     },
//     id,
//   }
// ) => {
//   const bookInfo = {
//     book: {
//       title: title,
//       author: authors.join(","),
//       shelf: shelf,
//       image_url: imageLinks.thumbnail,
//       grade: "",
//       categories: categories.join(","),
//       review: "",
//       google_book_id: id,
//     },
//   };

//   const filteredTitle = userBooks.filter(
//     (book) => book.title === bookInfo.book.title
//   );
//   console.log(bookInfo);
//   if (filteredTitle.length === 0) {
//     api
//       .post(`/users/${userInfo.user.id}/books/`, bookInfo, {
//         headers: { authorization: userInfo.token },
//       })
//       .catch((err) => console.log(err));
//     dispatch(getBooks(userInfo));
//   } else {
//     let filteredShelf = filteredTitle.filter(
//       (book) => book.shelf === bookInfo.book.shelf
//     );
//     if (filteredShelf.length === 0) {
//       dispatch(
//         updateBook(
//           { book: { shelf: shelf } },
//           userInfo.user,
//           filteredTitle[0]
//         )
//       );
//     } else {
//       console.log("book already added");
//     }
//   }
// };