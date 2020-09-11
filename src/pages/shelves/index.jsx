import React, { useEffect } from "react";
import getBooks from "../../redux/actions/getBook.js";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateSession } from "../../redux/actions/sessionActions";

const Shelves = () => {
  const dispatch = useDispatch();
  const [userInfo, userBooks] = useSelector((state) => [
    state.session,
    state.books.books,
  ]);

  useEffect(() => {
    dispatch(getBooks(userInfo));

    dispatch(
      updateSession(
        localStorage.getItem("token"),
        JSON.parse(localStorage.getItem("CurrentUser"))
      )
    );
  }, []);

  return (
    <MainShelf>
      <UserBox>
        <h2>Usuário: {userInfo.user.user}</h2>
      </UserBox>
      <UserShelf>
        {userBooks
          .filter((book) => book.shelf === 1)
          .map((book) => {
            return (
              <Book key={book.id}>
                <img src={book.image_url} />
              </Book>
            );
          })}
      </UserShelf>

      <UserShelf>
        {userBooks
          .filter((book) => book.shelf === 2)
          .map((book) => {
            return (
              <Book key={book.id}>
                <img src={book.image_url} />
              </Book>
            );
          })}
      </UserShelf>
      <UserShelf>
        {userBooks
          .filter((book) => book.shelf === 3)
          .map((book) => {
            return (
              <Book key={book.id}>
                <img src={book.image_url} />
              </Book>
            );
          })}
      </UserShelf>
    </MainShelf>
  );
};

export default Shelves;

const MainShelf = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const UserBox = styled.div`
  width: 70vw;
  height: 100px;
  background-color: #cccccc;
  border-radius: 6px;
  margin-bottom: 10px;

  h2 {
    text-align: left;
    font-size: 1.6rem;
    font-weight: bold;
    margin: 12px 20px;
  }
`;

const UserShelf = styled.div`
  background-color: #cccccc;
  width: 70vw;
  height: 250px;
  margin: 10px;
  border-radius: 6px;
  padding: 10px;
  display: flex;
`;

const Book = styled.div`
  margin: 10px;
  img {
    width: 100px;
    height: 150px;
  }
`;
