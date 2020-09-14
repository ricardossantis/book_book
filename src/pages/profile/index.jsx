import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProfileModal from "../../components/modals/profile";
import { updateSession } from "../../redux/actions/session";
import addBooks from "../../redux/actions/addBook.js";
import { Book } from "../../components/exports.js";
import styled from "styled-components";
import ProfilePic from "../../components/profilePic";

const Shelves = () => {
  const dispatch = useDispatch();
  const [userInfo, userBooks] = useSelector((state) => [
    state.session,
    state.books.books,
  ]);
  const [modal, setModal] = useState();

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
        {modal && <ProfileModal setModal={setModal} />}
        <h2>Usuário: {userInfo.user.user}</h2>
        <ProfilePic userInfo={userInfo} />
        <button onClick={() => setModal(!modal)}>Edit Profile</button>
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
  height: 200px;
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
