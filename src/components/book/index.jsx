import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import api from "../../services/api";
import Feedback from "../feedback";

import { setFeedbackAuthorization } from "../../redux/actions/feedback";

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const [userInfo, authorization] = useSelector((state) => [
    state.session,
    state.authorization.feedback.authorization,
  ]);
  const changeShelf = (shelf) => {
    api.put(
      `/users/${userInfo.user.id}/books/${book.id}`,
      { book: { shelf: shelf } },
      {
        headers: { authorization: userInfo.token },
      }
    );
  };

  return (
    <Box>
      <img src={book.image_url} />
      {authorization && <Feedback book={book} />}
      <BoxButton>
        <Button onClick={() => changeShelf(1)}>ler</Button>
        <Button onClick={() => changeShelf(2)}>lendo</Button>
        <Button onClick={() => changeShelf(3)}>lido</Button>
        <Button
          onClick={() => {
            dispatch(setFeedbackAuthorization(true));
          }}
        >
          FeedBack
        </Button>
      </BoxButton>
    </Box>
  );
};

export default Book;

const Box = styled(motion.div)`
  margin: 10px;
  img {
    width: 100px;
    height: 150px;
    transition: 0.3s;
  }

  &:hover img {
    width: 140px;
    height: 180px;
  }
`;
const ContainerBook = styled.div``;
const Button = styled.button`
  flex: 1;
  font-size: 10px;
  color: black;
`;
const BoxButton = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
