import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { updateSession } from "../../redux/actions/session.js";
import { Book } from "../../components/exports.js";
import { getBooks } from "../../redux/actions/books.js";
import styled from "styled-components";
import getUsers from "../../utils/getUsers.js";
import ProfileModal from "../../components/modals/profile";
import ProfilePic from "../../components/profilePic";
import PageTransition from "../../components/pageTransition";
import ChartPie from "../../components/chart/index.jsx";
import BookBlank from "../../assets/img/book-blank.png";

let counter = 0;

const Shelves = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [modal, setModal] = useState();
  const [showButtons, setShowButtons] = useState(true);
  const [currentUser, setCurrentUser] = useState({ user: {}, books: [] });
  const [
    { user, token, friends },
    books,
  ] = useSelector(({ session, books }) => [session, books.books]);

  useEffect(() => {
    if (user.id !== undefined && user.id === Number(params.id)) {
      setShowButtons(true);
      setCurrentUser({ user, books });
    } else {
      setShowButtons(false);
      getUsers(params, setCurrentUser);
    }
  }, [params, user, books]);

  useEffect(() => {
    if (books.length === 0 && counter < 2) {
      user.id === undefined
        ? dispatch(updateSession())
        : dispatch(getBooks({ user, token }));
      counter++;
    }
  }, [books, token, user, dispatch]);
  const ShelvesFilter = (filterShelf) =>
    currentUser.books
      .filter(({ shelf }) => filterShelf === shelf)
      .map((book) => {
        const { image_url = BookBlank } = book

        return (
          <Book
            book={book}
            image={image_url}
            key={book.id}
            showButtons={showButtons} />
        )
      });

  return (
    <PageTransition>
      <Container>
        <Profile>
          {modal && <ProfileModal setModal={setModal} />}
          <h2>Usuário: {currentUser.user && currentUser.user.user}</h2>

          <ProfilePic userInfo={currentUser} />
          {showButtons && (
            <button onClick={() => setModal(!modal)}>Edit Profile</button>
          )}
          <section>
            Amigos:
            {Object.values(friends).map((friend) => (
            <Link
              key={friend.id}
              to={`/perfil/${friend.id}`}
              style={{ margin: "0 5px" }}
            >
              {friend.user}
            </Link>
          ))}
          </section>
          <ChartPie />
        </Profile>

        <Shelf>{ShelvesFilter(1)}</Shelf>
        <Shelf>{ShelvesFilter(2)}</Shelf>
        <Shelf>{ShelvesFilter(3)}</Shelf>
      </Container>
    </PageTransition>
  );
};

export default Shelves;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Profile = styled.div`
  width: 70vw;
  height: 200px;
  background-color: #cccccc;
  border-radius: 6px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

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
