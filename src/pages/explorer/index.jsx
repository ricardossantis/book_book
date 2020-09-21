import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooksReviews } from "../../redux/actions/books.js";
import { updateSession } from "../../redux/actions/session.js";
import { filterBooks } from "./filterBooks.js";
import PageTransition from "../../components/pageTransition";
import Carousel from "../../components/swiperCarousel/index.jsx";
import { ExplorerContainer, Set, Title } from "./styled-explorer";

const Explorer = () => {
  const dispatch = useDispatch();
  const [reviews, { user, token }] = useSelector((state) => [
    state.books.reviews,
    state.session,
  ]);
  const friends = user.config;

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
