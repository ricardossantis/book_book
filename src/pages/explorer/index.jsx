import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooksReviews } from "../../redux/actions/books.js";
import { updateSession } from "../../redux/actions/session.js";
import { filterBooks } from "./filterBooks.js";
import PageTransition from "../../components/pageTransition";
import styled from "styled-components";
import Carousel from "../../components/swiperCarousel/index.jsx";

const Explorer = () => {
  const dispatch = useDispatch();
  const [reviews, { user, friends, token }] = useSelector((state) => [
    state.books.reviews,
    state.session,
  ]);

  const AllBooksPages = reviews;
  const MostComtdPages = filterBooks(reviews, "commented", friends);
  const MostVotedPages = filterBooks(reviews, "voted", friends);
  const MostReadPages = filterBooks(reviews, "read", friends);
  const ByFriendsPages = filterBooks(reviews, "friends", friends);

  useEffect(() => {
    dispatch(getBooksReviews(token));
    dispatch(updateSession());
  }, [dispatch, token]);

  return (
    <PageTransition>
      <ExplorerContainer>
        <Set>
          <Title>
            <h1>Novidades</h1>
          </Title>
          <Carousel books={AllBooksPages} />
        </Set>

        {/* MAIS COMENTADOS ------------------------------------------------------*/}

        <Set>
          <Title>
            <h1>Mais comentados</h1>
          </Title>
          <Carousel books={MostComtdPages} />
        </Set>

        {/* MAIS VOTADOS --------------------------------------------------------- */}

        <Set>
          <Title>
            <h1>Mais Votados</h1>
          </Title>
          <Carousel books={MostVotedPages} />
        </Set>

        {/* MAIS LIDOS ------------------------------------------------------------*/}

        <Set>
          <Title>
            <h1>Mais Lidos</h1>
          </Title>
          <Carousel books={MostReadPages} />
        </Set>

        {/* POR AMIGOS ------------------------------------------------------------*/}

        <Set>
          <Title>
            <h1> Por Amigos </h1>
          </Title>
          <Carousel books={ByFriendsPages} />
        </Set>
      </ExplorerContainer>
    </PageTransition>
  );
};

export default Explorer;

export const ExplorerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  scroll-behavior: smooth;
`;

// O Set engloba o titulo e a seção com os livros
export const Set = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-behavior: smooth;
  margin-top: 40px;
`;

export const Title = styled.div`
  position: absolute;
  top: 0;
  left: 5vw;

  h1 {
    font-family: "Helvetica", sans-serif;
    font-weight: 900;
    color: #e5e5e5;
    font-size: 1.6vw;
    display: table-cell;
  }
`;

// Controla como os livros são mostrados dentro da seção, 8 livros por vez;
export const BookSection = styled.section`
  scroll-behavior: smooth;

  position: relative;
  width: 100%;
  height: 315px;
  display: grid;
  grid-template-columns: repeat(8, 12%);
  column-gap: 9px;
  grid-template-rows: 310px;
`;

// Botões para passar para os próximos livros do array +8, ou para os anteriores -8
export const Btn = styled.button`
  position: absolute;
  width: 100px;
  height: 100%;
  outline: none;
  color: #fff;
  font-size: 6em;
  border-radius: 3px;
  background: rgb(0, 0, 0);

  border: none;
  text-decoration: none;
  padding: 0;
  display: flex;
  text-align: center;

  svg {
    height: 100%;
    cursor: pointer;
    pointer-events: auto;
    border-top: 60px solid transparent;
    border-bottom: 60px solid transparent;
  }

  :nth-of-type(1) {
    top: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      -90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );

    svg {
      // margin-right: 15px;
    }
  }
  &:nth-of-type(2) {
    top: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );

    svg {
      margin-left: 8px;
    }
  }
`;
