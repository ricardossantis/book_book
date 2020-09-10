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

function Search() {
  const [input, setInput] = useState();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let bookLinks = ` https://www.googleapis.com/books/v1/volumes?q=coding`;
    axios.get(bookLinks).then((res) => setBooks(res.data.items));
  }, []);

  const handleSearchClick = () => {
    let bookLinks = ` https://www.googleapis.com/books/v1/volumes?q=${input}`;
    axios.get(bookLinks).then((res) => setBooks(res.data.items));
  };

  const handleBookClick = (e) => {
    console.log(e.target);
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
          {books.length > 0 &&
            books.map((book) => {
              return (
                <StyledSearch.Book key={book.id}>
                  <StyledSearch.Book.Title>
                    Book Title: {book.volumeInfo.title}
                  </StyledSearch.Book.Title>

                  <StyledSearch.Book.Image
                    onClick={handleBookClick}
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.volumeInfo.authors[0]}
                  />
                  <StyledAddButtonsDiv>
                    <StyledAddButton>Add to 1</StyledAddButton>
                    <StyledAddButton>Add to 2</StyledAddButton>
                    <StyledAddButton>Add to 3</StyledAddButton>
                  </StyledAddButtonsDiv>
                </StyledSearch.Book>
              );
            })}
        </StyledSearch.Rows>
      </StyledSearch>
    </>
  );
}

export default Search;
