import { motion } from "framer-motion";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import updateBook from "../../utils/updateBook";
import Feedback from "../feedback";

const Book = ({ book }) => {
  const [modal, setModal] = useState();
  const { id } = useParams();

  const changeShelf = (shelf) => {
    updateBook({ book: { shelf: shelf } }, id, book);
  };

  return (
    <Box>
      <img src={book.image_url} alt="imagem do livro" />
      {modal && <Feedback book={book} setModal={setModal} />}
      <BoxButton>
        <Button onClick={() => changeShelf(1)}>ler</Button>
        <Button onClick={() => changeShelf(2)}>lendo</Button>
        <Button onClick={() => changeShelf(3)}>lido</Button>
        <Button onClick={() => setModal(!modal)}>FeedBack</Button>
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
`;
