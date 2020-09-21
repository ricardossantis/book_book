import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import UserIcon from "../../../assets/icons/profile-icon.png";
import BookBlank from "../../../assets/img/book-blank.png";
import { updateFriends, removeFriends } from "../../../redux/actions/friends";
import {
  Book,
  BookImg,
  FallBackContent,
  InnerImage,
  Content,
  Title,
  Rating,
  Description,
  User,
  UserImage,
  UserReview,
  UserName,
  BtnContainer,
  AddButton,
} from "./styled-book";

const CardExplorer = ({ book }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  const { user } = useSelector((state) => state.session);
  const friends = user.config;

  // if (!description) {
  //   axios
  //     .get(`https://www.googleapis.com/books/v1/volumes/${book.google_book_id}`)
  //     .then((res) => {
  //       if (res.data.volumeInfo.description === undefined) {
  //         setDescription("Este livro não possui uma descrição.");
  //       } else {
  //         setDescription(res.data.volumeInfo.description);
  //       }
  //     })
  //     .catch((err) => {
  //       setDescription("Este livro não possui uma descrição.");
  //     });
  // }

  return (
    <>
      <Book>
        <BookImg
          src={book.image_url ? book.image_url : BookBlank}
          alt="book-image"
        />
      </Book>
      <>
        <FallBackContent>
          <InnerImage
            src={book.image_url ? book.image_url : BookBlank}
            alt="book"
          />
          <Content>
            <Title>{book.title}</Title>
            <Rating disabled defaultValue={book.grade} />
            <Description>{description}</Description>
            <User to={`/perfil/${book.creator.id}`}>
              <UserImage
                src={book.creator.image_url ? book.creator.image_url : UserIcon}
              />
              <UserReview>
                "
                {book.review
                  ? book.review
                  : "Este usuário não deixou nenhuma avaliação para este livro."}
                "
              </UserReview>
            </User>
            <UserName to={`/perfil/${book.creator.id}`}>
              <p>Adicionado por </p>
              <h2>{book.creator.user}</h2>
            </UserName>
            <BtnContainer>
              {book.creator.id !== user.id && (
                <AddButton
                  onClick={() => {
                    if (friends && friends[book.creator.id]) {
                      dispatch(removeFriends(user, book.creator));
                    } else {
                      dispatch(updateFriends(user, book.creator));
                    }
                  }}
                >
                  {friends && friends[book.creator.id]
                    ? "Desfazer amizade"
                    : "Adicionar amigo"}
                </AddButton>
              )}
            </BtnContainer>
          </Content>
        </FallBackContent>
      </>
    </>
  );
};

export default CardExplorer;
