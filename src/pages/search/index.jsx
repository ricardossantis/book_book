import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSession } from "../../redux/actions/session";
import axios from "axios";
import { getBooks } from "../../redux/actions/books.js";
import {
  StyledSearch,
  StyledContainer,
  StyledTitle,
  StyledBox,
} from "./styled-search.js";
import Carousel from "../../components/swiperCarousel/index";

let counter = 0;

const Search = () => {
  const dispatch = useDispatch();
  const [userInfo, userBooks] = useSelector((state) => [
    state.session,
    state.books.books,
  ]);
  const [googleBooksSearch, setGoogleBooksSearch] = useState({
    totalItems: 0,
    items: [],
  });
  const [googleBooksSugestion, setGoogleBooksSugestion] = useState({
    totalItems: 0,
    items: [],
  });
  const [googleBooksFixed1, setGoogleBooksFixed1] = useState({
    totalItems: 0,
    items: [],
  });
  const [googleBooksFixed2, setGoogleBooksFixed2] = useState({
    totalItems: 0,
    items: [],
  });
  const input = useSelector((state) => state.inputValue.inputValue);
  const [category, setCategory] = useState("initial");

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${"cooking"}`)
      .then(({ data }) => setGoogleBooksFixed1(data));

    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${"beach"}`)
      .then(({ data }) => setGoogleBooksFixed2(data));
  }, []);

  useEffect(() => {
    if (userBooks.length === 0 && counter < 2) {
      counter += 1;
      userInfo.user.id === undefined
        ? dispatch(updateSession())
        : dispatch(getBooks(userInfo));
    } else {
      if (category === "initial") {
        setCategory(
          userBooks
            .map(
              (book) =>
                (book = book.categories && book.categories.split(" ")[0])
            )
            .filter((el) => el !== "")
            .reduce(
              (acc, cur, idx, arr) =>
                arr.filter((val) => val === acc).length >=
                  arr.filter((val) => val === cur).length
                  ? acc
                  : cur,
              null
            )
        );
      } else if (category === null && googleBooksSugestion.items.length === 0) {
        setGoogleBooksSugestion({ totalItems: 0, items: [] });
      } else {
        axios
          .get(`https://www.googleapis.com/books/v1/volumes?q=${category}`)
          .then(({ data }) => setGoogleBooksSugestion(data));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, userInfo, userBooks, category]);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${input.replace(
          /\s/g,
          "+"
        )}`
      )
      .then(({ data }) => {
        data.items !== undefined && setGoogleBooksSearch(data);
      });
  }, [input]);



  //ARRUMAR O STYLE  DESCONSTRUÇÃO
  return (
    <>
      <StyledSearch>
        <StyledContainer>
          {googleBooksSearch.totalItems === 0 ? (
            <StyledBox>Please, search a book</StyledBox>
          ) : (
              <Carousel books={googleBooksSearch.items} />
            )}
          <StyledTitle>Sugestion</StyledTitle>
          {googleBooksSugestion.totalItems === 0 ? (
            <StyledBox>No sugestions, add books</StyledBox>
          ) : (
              <Carousel books={googleBooksSugestion.items} />
            )}
          {[googleBooksFixed1, googleBooksFixed2].map((el, key) => (
            <React.Fragment key={key}>
              <StyledTitle>Diverse Books</StyledTitle>
              <Carousel books={el.items} />
            </React.Fragment>
          ))}
        </StyledContainer>
      </StyledSearch>
    </>
  );
};

export default Search;
