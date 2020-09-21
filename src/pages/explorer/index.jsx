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
  const [currentAllPageBooks, setCurrentAllPageBooks] = useState([]);

  const MostComtdPages = filterBooks(reviews, "commented", friends);
  const [currentComPageBooks, setCurrentComPageBooks] = useState([]);

  const MostVotedPages = filterBooks(reviews, "voted", friends);
  const [currentVotPage, setCurrentVotPage] = useState([]);

  const MostReadPages = filterBooks(reviews, "read", friends);
  const [currentReadPage, setCurrentReadPage] = useState([]);

  const ByFriendsPages = filterBooks(reviews, "friends", friends);
  const [currentFriendPage, setCurrentFriendPage] = useState([]);

  useEffect(() => {
    setCurrentAllPageBooks(AllBooksPages.slice(0, 40));
    setCurrentComPageBooks(MostComtdPages.slice(0, 40));
    setCurrentVotPage(MostVotedPages.slice(0, 40));
    setCurrentReadPage(MostReadPages.slice(0, 40));
    setCurrentFriendPage(ByFriendsPages.slice(0, 40));
  }, [reviews]);

  useEffect(() => {
    dispatch(getBooksReviews(token));
    dispatch(updateSession());
  }, [dispatch, token]);

  const getMoreBooks = (loadedBooks, carousel, total, setTotal, setBooks) => {
    if (total === 0) {
      setTotal(40);
    }

    if (loadedBooks > total / 2) {
      setBooks(carousel.slice(0, loadedBooks + 20));
      setTotal(total + 20);
    }
  };

  return (
    <PageTransition>
      <ExplorerContainer>
        <Set>
          <Title>
            <h1>Novidades</h1>
          </Title>
          <Carousel
            books={currentAllPageBooks}
            friends={friends}
            user={user}
            carousel={AllBooksPages}
            setCurrentBooks={setCurrentAllPageBooks}
            getMoreBooks={getMoreBooks}
          />
        </Set>

        {/* MAIS COMENTADOS ------------------------------------------------------*/}

        <Set>
          <Title>
            <h1>Mais comentados</h1>
          </Title>
          <Carousel
            books={currentComPageBooks}
            friends={friends}
            user={user}
            carousel={MostComtdPages}
            setCurrentBooks={setCurrentComPageBooks}
            getMoreBooks={getMoreBooks}
          />
        </Set>

        {/* MAIS VOTADOS --------------------------------------------------------- */}

        <Set>
          <Title>
            <h1>Mais Votados</h1>
          </Title>
          <Carousel
            books={currentVotPage}
            friends={friends}
            user={user}
            carousel={MostVotedPages}
            setCurrentBooks={setCurrentVotPage}
            getMoreBooks={getMoreBooks}
          />
        </Set>

        {/* MAIS LIDOS ------------------------------------------------------------*/}

        <Set>
          <Title>
            <h1>Mais Lidos</h1>
          </Title>
          <Carousel
            books={currentReadPage}
            friends={friends}
            user={user}
            carousel={MostReadPages}
            setCurrentBooks={setCurrentReadPage}
            getMoreBooks={getMoreBooks}
          />
        </Set>

        {/* POR AMIGOS ------------------------------------------------------------*/}

        <Set>
          <Title>
            <h1> Por Amigos </h1>
          </Title>
          <Carousel
            books={currentFriendPage}
            friends={friends}
            user={user}
            carousel={ByFriendsPages}
            setCurrentBooks={setCurrentFriendPage}
            getMoreBooks={getMoreBooks}
          />
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
