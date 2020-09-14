import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import addBooks from "../../redux/actions/addBook.js";
import { updateSession } from "../../redux/actions/session";
import axios from "axios";
import api from "../../services/api.js";

import {
  StyledSearch,
  StyledSearchField,
  StyledInput,
  StyledSearchButton,
  StyledAddButtonsDiv,
  StyledAddButton,
} from "./styled-search.js";
import updateBook from "../../utils/updateBook.js";

let counter = 0;

const Search = () => {
  const dispatch = useDispatch();
  const [userInfo, userBooks] = useSelector((state) => [
    state.session,
    state.books.books,
  ]);
  const [googleBooks, setGoogleBooks] = useState({ totalItems: 0, items: [] });
  const [input, setInput] = useState("");

  useEffect(() => {
    if (userBooks.length === 0 && counter < 2) {
      counter += 1;
      userInfo.user.id === undefined
        ? dispatch(updateSession())
        : dispatch(addBooks(userInfo));
    } else {
      console.log(userBooks);
      let category = userBooks
        .map((book) => (book = book.categories.split(" ")[0]))
        .reduce(
          (acc, cur, idx, arr) =>
            arr.filter((val) => val === acc).length >=
            arr.filter((val) => val === cur).length
              ? acc
              : cur,
          null
        );
      console.log(category);
      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${
            category === null ? "book" : category
          }`
        )
        .then(({ data }) => setGoogleBooks(data));
    }
  }, [dispatch, userInfo, userBooks]);

  const handleSearchClick = () =>
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${input.replace(
          /\s/g,
          "+"
        )}`
      )
      .then(({ data }) => {
        data.items !== undefined && setGoogleBooks(data);
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

    if (filteredTitle.length === 0) {
      api
        .post(`/users/${userInfo.user.id}/books/`, bookInfo, {
          headers: { authorization: userInfo.token },
        })
        .catch((err) => console.log(err));
      dispatch(addBooks(userInfo));
    } else {
      updateBook(
        { book: { shelf: shelf } },
        userInfo.user.id,
        filteredTitle[0].id
      );
      dispatch(addBooks(userInfo));
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
        <StyledSearch.Title>Search</StyledSearch.Title>
        <StyledSearch.Rows>
          {googleBooks.totalItems === 0 ? (
            <StyledSearch.Book>No book found</StyledSearch.Book>
          ) : (
            googleBooks.items.map((book) => {
              const {
                volumeInfo: { title, authors = [], imageLinks = "" },
                id,
              } = book;
              return (
                <StyledSearch.Book key={id}>
                  <StyledSearch.Book.Title>
                    Book Title: {title}
                  </StyledSearch.Book.Title>

                  <StyledSearch.Book.Image
                    src={imageLinks.thumbnail}
                    alt={authors[0]}
                  />

                  <StyledAddButtonsDiv>
                    <StyledAddButton onClick={() => handleBookClick(1, book)}>
                      Quero Ler
                    </StyledAddButton>
                    <StyledAddButton onClick={() => handleBookClick(2, book)}>
                      Lendo
                    </StyledAddButton>
                    <StyledAddButton onClick={() => handleBookClick(3, book)}>
                      Lido
                    </StyledAddButton>
                  </StyledAddButtonsDiv>
                </StyledSearch.Book>
              );
            })
          )}
        </StyledSearch.Rows>
      </StyledSearch>
    </>
  );
};

export default Search;
