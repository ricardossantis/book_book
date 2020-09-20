import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import axios from "axios";
import UserIcon from "../../../assets/icons/profile-icon.png";
import { motion } from "framer-motion";
import BookBlank from "../../../assets/img/book-blank.png";
import { addFriend } from "../../../redux/actions/session";

const CardExplorer = ({ book, friends, user }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes/${book.google_book_id}`)
      .then((res) => {
        if (res.data.volumeInfo.description === undefined) {
          setDescription("Este livro não possui uma descrição.");
        } else {
          setDescription(res.data.volumeInfo.description);
        }
      })
      .catch((err) => {
        setDescription("Este livro não possui uma descrição.");
      });
  }, [book.google_book_id]);

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
            <Button>
              {book.creator.id !== user.id && (
                <motion.div whileTap={{ scale: 0.9 }}>
                  <button
                    disabled={
                      friends && friends[book.creator.id] ? true : false
                    }
                    onClick={() => dispatch(addFriend(book.creator))}
                  >
                    {friends && friends[book.creator.id]
                      ? "Desfazer amizade"
                      : "Adicionar amigo"}
                  </button>
                </motion.div>
              )}
            </Button>
          </Content>
        </FallBackContent>
      </>
    </>
  );
};

export default CardExplorer;

export const BookContainer = styled.div`
  position: relative;
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

export const FallBackContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #181818;
  border-radius: 5px;
  width: 200px;
  height: 310px;
  display: flex;
  opacity: 0;
  transition: 0.2s;

  &:hover {
    transition: 0.2s 0.4s;
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

export const Rating = styled(Rate)`
  cursor: not-allowed;
  pointer-events: none;
  align-self: flex-start;
  margin-left: 10px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  .anticon svg {
    width: 14px;
  }

  .ant-rate-star:not(:last-child) {
    margin-right: 4px;
  }
`;

export const Description = styled.p`
  max-width: 90%;
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  color: #fff;
  line-height: 0.8rem;
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

export const User = styled(Link)`
  max-width: 90%;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-start;
  text-align: left;
  margin-top: auto;
`;

export const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-left: 8px;
`;

export const UserReview = styled.p`
  font-size: 0.9rem;
  line-height: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  margin-bottom: 1px;
  margin-left: 4px;
`;

export const UserName = styled(Link)`
  width: 100%;
  display: flex;
  align-items: center;
  align-self: flex-start;
  text-align: left;
  color: #fff;
  margin-left: 8px;

  p {
    font-size: 0.8rem;
    margin-right: 4px;
  }

  h2 {
    font-size: 1.1rem;
    font-weight: 900;
    color: #fff;
  }
`;

export const Button = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  align-self: flex-start;
  margin-left: 10px;
  margin-bottom: 10px;

  button {
    font-family: "Scada", sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    color: #000;
    border: none;
    border-radius: 2px;
    box-shadow: 4px 4xp 8px #fff8e5;
    background: #fff;
  }
`;
