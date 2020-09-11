import React, { useEffect, useRef } from "react";
import getBooks from "../../redux/actions/getBook.js";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { updateSession } from "../../redux/actions/sessionActions";
import Book from "../../components/book/index.jsx";

const Shelves = () => {
  const dispatch = useDispatch();
  const [userInfo, userBooks] = useSelector((state) => [
    state.session,
    state.books.books,
  ]);

  useEffect(() => {
    dispatch(
      updateSession(
        localStorage.getItem("token"),
        JSON.parse(localStorage.getItem("CurrentUser"))
      )
    );

    dispatch(getBooks(userInfo))
  }, []);

  setTimeout(() => dispatch(getBooks(userInfo)), 200)


  const ShelvesFilter = (shelf) => {
    console.log(userBooks)
    return userBooks
      .filter((book) => book.shelf === shelf)
      .map((book) => <Book book={book} key={book.id} />)
  }



  return (
    <Container>
      <Profile>
        <h2>Usuário: {userInfo.user.user}</h2>
      </Profile>
      <Shelf >
        {ShelvesFilter(1)}
      </Shelf>

      <Shelf >
        {ShelvesFilter(2)}
      </Shelf>
      <Shelf >
        {ShelvesFilter(3)}
      </Shelf>
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
