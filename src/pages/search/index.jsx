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
import { useDispatch } from "react-redux";

function Search() {
  const dispatch = useDispatch();
  const [input, setInput] = useState();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let bookLinks = ` https://www.googleapis.com/books/v1/volumes?q=coding`;
    axios.get(bookLinks).then((res) => setBooks(res.data.items));
  }, []);

  const handleSearchClick = () => {
    let bookLinks = ` https://www.googleapis.com/books/v1/volumes?q=${input}`;
    axios.get(bookLinks).then((res) => {
      res.data.items === undefined ? setBooks([]) : setBooks(res.data.items);
    });
  };

  const handleBookClick = (shelf, book) => {
    let bookInfo = {
      book: {
        title: book.volumeInfo.title,
        author: book.volumeInfo.authors,
        shelf: shelf,
        image_url: book.volumeInfo.imageLinks.thumbnail,
        grade: "",
        categories: book.volumeInfo.categories,
        review: "",
        google_book_id: book.id,
      },
    };

    // switch (shelf) {
    //   case 1:
    //     dispatch(addBook(bookInfo, shelf));
    //     break;
    //   case 2:
    //     dispatch(addBook(bookInfo, shelf));
    //     break;
    //   case 3:
    //     dispatch(addBook(bookInfo, shelf));
    //     break;
    // }
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
          {books.length > 0 ? (
            books.map((book) => {
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
