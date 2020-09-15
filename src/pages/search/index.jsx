import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSession } from "../../redux/actions/session";
import axios from "axios";
import api from "../../services/api.js";

import { getBooks, updateBook } from "../../redux/actions/books.js";
import styled from "styled-components";
import Book from "../../components/book";

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
        : dispatch(getBooks(userInfo));
    } else {

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

      axios
        .get(
          `https://www.googleapis.com/books/v1/volumes?q=${category === null ? "book" : category
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
      dispatch(getBooks(userInfo));
    } else {
      dispatch(
        updateBook({ book: { shelf: shelf } }, userInfo.user, filteredTitle[0])
      );
    }
  };
  //ARRUMAR O STYLE  DESCONSTRUÇÃO
  return (
    <>



      <Container>

        <div>
          <input onChange={({ target: { value } }) => setInput(value)} />
          <button onClick={handleSearchClick}>
            Search
        </button>
        </div>

        <Title>Search</Title>

        <Rows>
          {googleBooks.totalItems === 0 ? (
            <Title>No book found</Title>
          ) : (
              googleBooks.items.map((book) => {
                const {
                  volumeInfo: { title, authors = [], imageLinks = "" },
                  id,
                } = book;
                return (
                  <CardBook key={id}>
                    <Title>
                      {title}
                    </Title>
                    <Book book={book} />
                    <BoxButton>
                      <AddButton onClick={() => handleBookClick(1, book)}>
                        Quero Ler
                    </AddButton>
                      <AddButton onClick={() => handleBookClick(2, book)}>
                        Lendo
                    </AddButton>
                      <AddButton onClick={() => handleBookClick(3, book)}>
                        Lido
                    </AddButton>
                    </BoxButton>
                  </CardBook>
                );
              })
            )}
        </Rows>
      </Container>
    </>
  );
};

export default Search;


const Container = styled.h4`
  margin: 0;
  display: flex;
  flex-flow:column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.p`

`
const Title = styled.h4`
  margin: 0;
  font-size:0.8rem;
  font-weight:bold;
`;

const Image = styled.img`
  width: 20%;
  height: 30%;
  &:hover {
    cursor: pointer;
  }
`;

const Rows = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items:center;
`;

const CardBook = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem 1rem;
  width:30%;
  background-color: #cccccc;
  border-radius: 0.5rem;
`;
const Description = styled.p``;


// const StyledInput = styled.input`
//   color: #000000;
// `;

// const inputButton = styled.button`
//   background-color: #666;
//   &:hover {
//     cursor: pointer;
//   }
// `;

const BoxButton = styled.div`
width:100%;
  display: flex;
  justify-content:center;
  align-items:center;
  flex-wrap: nowrap;
`;

const AddButton = styled.button`
box-sizing: border-box;
width:2rem;
height: 1.5rem;
margin:5px;
font-size:0.5rem;
border-radius:2px;
  background-color: #666;
  &:hover {
    cursor: pointer;
  }
`;
