import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  StyledSearch,
  StyledSearchField,
  StyledInput,
  StyledSearchButton,
  StyledAddButtonsDiv,
  StyledAddButton,
} from "./styled-search.js";
import { useDispatch, useSelector } from "react-redux";
import api from "../../services/api.js";
import getBooks from "../../redux/actions/getBook.js";

function Search() {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.session);
  const userBooks = useSelector((state) => state.books);
  const [input, setInput] = useState();
  const [googleBooks, setGoogleBooks] = useState([]);

  useEffect(() => {
    let bookLinks = ` https://www.googleapis.com/books/v1/volumes?q=coding`;
    axios.get(bookLinks).then((res) => setGoogleBooks(res.data.items));
    dispatch(getBooks(userInfo));
  }, []);

  const handleSearchClick = () => {
    let bookLinks = ` https://www.googleapis.com/books/v1/volumes?q=${input}`;
    axios.get(bookLinks).then((res) => {
      res.data.items === undefined
        ? setGoogleBooks([])
        : setGoogleBooks(res.data.items);
    });
  };

  const handleBookClick = (shelf, apiBook) => {
    let bookInfo = {
      book: {
        title: apiBook.volumeInfo.title,
        author: apiBook.volumeInfo.authors.join(","),
        shelf: shelf,
        image_url: apiBook.volumeInfo.imageLinks.thumbnail,
        grade: "",
        categories: apiBook.volumeInfo.categories.join(","),
        review: "",
        google_book_id: apiBook.id,
      },
    };

    let userBooksArr = [...userBooks];
    console.log(userBooks, userBooksArr);
    let filteredTitle = userBooks.payload.filter(
      (book) => book.book.title === bookInfo.title
    );

    if (filteredTitle.length === 0) {
      api
        .post(`/users/${userInfo.user.id}/books/`, bookInfo, {
          headers: { authorization: userInfo.token },
        })
        .catch((err) => console.log(err));
      dispatch(getBooks(userInfo));
    } else {
      let filteredShelf = filteredTitle.filter(
        (book) => book.book.shelf === bookInfo.shelf
      );

      filteredShelf.length === 0
        ? api.put(
            `/users/${userInfo.user.id}/books/${apiBook.id}`,
            { book: { shelf: apiBook.shelf } },
            {
              headers: { authorization: userInfo.token },
            }
          )
        : console.log("Book already added");
    }
  };

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
          {googleBooks.length > 0 ? (
            googleBooks.map((book) => {
              return (
                <StyledSearch.Book key={book.id}>
                  <StyledSearch.Book.Title>
                    Book Title: {book.volumeInfo.title}
                  </StyledSearch.Book.Title>

                  <StyledSearch.Book.Image
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.authors[0]}
                  />
                  <StyledAddButtonsDiv>
                    <StyledAddButton onClick={() => handleBookClick(1, book)}>
                      Add to 1
                    </StyledAddButton>
                    <StyledAddButton onClick={() => handleBookClick(2, book)}>
                      Add to 2
                    </StyledAddButton>
                    <StyledAddButton onClick={() => handleBookClick(3, book)}>
                      Add to 3
                    </StyledAddButton>
                  </StyledAddButtonsDiv>
                </StyledSearch.Book>
              );
            })
          ) : (
            <StyledSearch.Book>No book found</StyledSearch.Book>
          )}
        </StyledSearch.Rows>
      </StyledSearch>
    </>
  );
}

export default Search;
