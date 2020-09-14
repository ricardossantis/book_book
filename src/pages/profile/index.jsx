import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateSession } from "../../redux/actions/session.js";
import { Book } from "../../components/exports.js";
import { getBooks } from "../../redux/actions/books.js";
import styled from "styled-components";
import getUsers from "../../utils/getUsers.js";
import ProfileModal from "../../components/modals/profile";
import ProfilePic from "../../components/profilePic";

const Shelves = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [modal, setModal] = useState();
  const [showButtons, setShowButtons] = useState(true);
  const [currentUser, setCurrentUser] = useState({ user: {}, books: [] });
  const [{ user, token }, books] = useSelector(({ session, books }) => [
    session,
    books.books,
  ]);

  useEffect(() => dispatch(updateSession()), [dispatch]);
  useEffect(() => dispatch(getBooks({ user, token })), [dispatch, token, user]);
  useEffect(() => {
    if (user.id !== undefined && user.id === Number(params.id)) {
      setShowButtons(true);
      setCurrentUser({ user, books });
    } else {
      setShowButtons(false);
      getUsers(params, setCurrentUser);
    }
  }, [params, user, books]);

  const ShelvesFilter = (filterShelf) =>
    currentUser.books
      .filter(({ shelf }) => filterShelf === shelf)
      .map((book) => (
        <Book book={book} key={book.id} showButtons={showButtons} />
      ));

  return (
    <Container>
      <Profile>
        {modal && <ProfileModal setModal={setModal} />}
        <h2>Usuário: {currentUser.user && currentUser.user.user}</h2>
        <ProfilePic userInfo={currentUser} />
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
