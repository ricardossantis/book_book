import { motion } from "framer-motion";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import styled from "styled-components";
import { deleteBook, updateBook } from "../../redux/actions/books";
import Feedback from "../modals/feedback";

const Book = ({ book, showButtons }) => {

  const image = book.image_url !== undefined ? book.image_url : book.volumeInfo.imageLinks.thumbnail;

  const dispatch = useDispatch();
  const [modal, setModal] = useState();
  const user = useParams();

  const changeShelf = (shelf) => {
    dispatch(updateBook({ book: { shelf: shelf } }, user, book));
  };

  return (
    <Box>
      <img src={image} alt="imagem do livro" />
      {modal && <Feedback book={book} setModal={setModal} />}
      <BoxButton showButtons={showButtons}>
        <Button onClick={() => changeShelf(1)}>ler</Button>
        <Button onClick={() => changeShelf(2)}>lendo</Button>
        <Button onClick={() => changeShelf(3)}>lido</Button>
        <Button onClick={() => setModal(!modal)}>FeedBack</Button>
        <Button onClick={() => dispatch(deleteBook({ user, book }))}>
          Remove
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

  button {
    visibility: ${(props) => (props.showButtons ? "visible" : "hidden")};
  }
`;
