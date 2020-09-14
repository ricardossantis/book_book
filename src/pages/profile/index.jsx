import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSession } from "../../redux/actions/session";
import addBooks from "../../redux/actions/addBook.js";
import { Book } from "../../components/exports.js";

import styled from "styled-components";

const Shelves = () => {
  const dispatch = useDispatch();
  const [userInfo, userBooks] = useSelector((state) => [
    state.session,
    state.books.books,
  ]);

  useEffect(() => dispatch(updateSession()), [dispatch]);
  useEffect(() => dispatch(addBooks(userInfo)), [
    dispatch,
    userInfo,
    userBooks,
  ]);

  const ShelvesFilter = (filterShelf) =>
    userBooks
      .filter(({ shelf }) => filterShelf === shelf)
      .map((book) => <Book book={book} key={book.id} />);

  return (
    <Container>
      <Profile>
        <h2>Usuário: {userInfo.user.user}</h2>
      </Profile>
      <Shelf>{ShelvesFilter(1)}</Shelf>
      <Shelf>{ShelvesFilter(2)}</Shelf>
      <Shelf>{ShelvesFilter(3)}</Shelf>
    </Container>
  );
};

export default Shelves;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Profile = styled.div`
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

const Shelf = styled.div`
  background-color: #cccccc;
  width: 70vw;
  height: 250px;
  margin: 10px;
  border-radius: 6px;
  padding: 10px;
  display: flex;
`;
