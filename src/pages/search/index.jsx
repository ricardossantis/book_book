import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSession } from "../../redux/actions/session";
import axios from "axios";
import api from "../../services/api.js";
import { getBooks, updateBook } from "../../redux/actions/books.js";
import {
  StyledSearch,
  StyledSearchField,
  StyledInput,
  StyledSearchButton,
  StyledContainer,
  StyledTitle,
  StyledBox,
} from "./styled-search.js";
import Carousel from "../../components/carousel";
import SearchCard from "../../components/searchCard";

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
  const [input, setInput] = useState("");
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
        console.log(googleBooksSugestion);
      } else if (category === null && googleBooksSugestion.items.length === 0) {
        setGoogleBooksSugestion({ totalItems: 0, items: [] });
      } else {
        axios
          .get(`https://www.googleapis.com/books/v1/volumes?q=${category}`)
          .then(({ data }) => setGoogleBooksSugestion(data));
      }
    }
  }, [dispatch, userInfo, userBooks, category]);

  const handleSearchClick = () =>
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

  const handleBookClick = (
    shelf,
    {
      volumeInfo: { title, authors = [], imageLinks = "", categories = [] },
      id,
    }
  ) => {
    const bookInfo = {
      book: {
        title: title,
        author: authors.join(","),
        shelf: shelf,
        image_url: imageLinks.thumbnail,
        grade: "",
        categories: categories.join(","),
        review: "",
        google_book_id: id,
      },
    };

    const filteredTitle = userBooks.filter(
      (book) => book.title === bookInfo.book.title
    );
    console.log(bookInfo);
    if (filteredTitle.length === 0) {
      api
        .post(`/users/${userInfo.user.id}/books/`, bookInfo, {
          headers: { authorization: userInfo.token },
        })
        .catch((err) => console.log(err));
      dispatch(getBooks(userInfo));
    } else {
      let filteredShelf = filteredTitle.filter(
        (book) => book.shelf === bookInfo.book.shelf
      );
      if (filteredShelf.length === 0) {
        dispatch(
          updateBook(
            { book: { shelf: shelf } },
            userInfo.user,
            filteredTitle[0]
          )
        );
      } else {
        console.log("book already added");
      }
    }
  };

  //ARRUMAR O STYLE  DESCONSTRUÇÃO
  return (
    <>
      <StyledSearchField>
        <StyledInput onChange={({ target: { value } }) => setInput(value)} />
        <StyledSearchButton onClick={handleSearchClick}>
          Search
        </StyledSearchButton>
      </StyledSearchField>

      <StyledSearch>
        <StyledContainer>
          <StyledTitle>Search</StyledTitle>
          {googleBooksSearch.totalItems === 0 ? (
            <StyledBox>Please, search a book</StyledBox>
          ) : (
            <Carousel>
              {googleBooksSearch.items.map((book, key) => {
                return (
                  <SearchCard
                    handleBookClick={handleBookClick}
                    book={book}
                    key={key}
                  />
                );
              })}
            </Carousel>
          )}
          <StyledTitle>Sugestion</StyledTitle>
          {googleBooksSugestion.totalItems === 0 ? (
            <StyledBox>No sugestions, add books</StyledBox>
          ) : (
            <Carousel>
              {googleBooksSugestion.items.map((book, key) => {
                return (
                  <SearchCard
                    handleBookClick={handleBookClick}
                    book={book}
                    key={key}
                  />
                );
              })}
            </Carousel>
          )}
          {[googleBooksFixed1, googleBooksFixed2].map((el) => (
            <>
              <StyledTitle>Diverse Books</StyledTitle>
              <Carousel>
                {el.items.map((book, key) => {
                  return (
                    <SearchCard
                      handleBookClick={handleBookClick}
                      book={book}
                      key={key}
                    />
                  );
                })}
              </Carousel>
            </>
          ))}
        </StyledContainer>
      </StyledSearch>
    </>
  );
};

export default Search;
