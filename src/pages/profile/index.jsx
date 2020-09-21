import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { updateSession } from "../../redux/actions/session.js";
import { getBooks } from "../../redux/actions/books.js";
import styled from "styled-components";
import getUsers from "../../utils/getUsers.js";
import ProfileModal from "../../components/modals/profile";
import ProfilePic from "../../components/profilePic";
import ChartPie from "../../components/chart/index.jsx";
import Carousel from "../../components/swiperCarousel/index.jsx";
import { AiOutlineEdit } from 'react-icons/ai';
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
    currentUser.books.filter(({ shelf }) => filterShelf === shelf)

  return (
    <Container>
      <Profile>
        {modal && <ProfileModal setModal={setModal} />}
        <BoxInfos>

          <ProfilePic userInfo={currentUser} />
          <h2>Usuario:</h2>
          <h3>{currentUser.user && currentUser.user.user}</h3>

          {showButtons && (
            <StyledButton onClick={() => setModal(!modal)}>
              <AiOutlineEdit />
            </StyledButton>
          )}
        </BoxInfos>
        <FriendBox>
          Amigos:{Object.values(friends).length}
          {Object.values(friends).map((friend) => (
            <Link
              key={friend.id}
              to={`/perfil/${friend.id}`}
              style={{ margin: "0 5px" }}
            >
              {friend.user}
            </Link>
          ))}

        </FriendBox>
        <ChartBox>
          <ChartPie />
        </ChartBox>
      </Profile>

      <Shelf><Carousel books={ShelvesFilter(1)} /></Shelf>
      <Shelf><Carousel books={ShelvesFilter(2)} /></Shelf>
      <Shelf><Carousel books={ShelvesFilter(3)} /></Shelf>
    </Container>
  );
};

export default Shelves;

const ChartBox = styled.div`
width: 300px;
height: 200px;
@media(min-width:600px){
height: 100%;
  width: 500px;
}
`

const BoxInfos = styled.div`
width: 100%;
display:flex;
justify-content:center;
align-items:center;
flex-flow:column;
height: 200px;
background:rgb(0,0,0,0.1);
padding:5px;
h2,h3{
  margin:0 !important;
  font-family:"Archivo",sans-serif;
}
h2{
  font-weight:bold;
  font-size:1.2rem;

}
h3{
  font-size:0.9rem;
}
div {
  width:50px;
  height: 50px;
}
@media(min-width:600px){
height: 100%;
  width: 300px;
}
`
const FriendBox = styled.div`
color:black;
font-family:"Archivo",sans-serif;
  font-weight:bold;
`
const StyledButton = styled.div`
display:flex;
justify-content:center;
align-items:center;
width: 30px !important;
height: 30px !important;
margin-top:10px;
border-radius:50%;
color:black;
background: rgb(204,140,104) ;
transition:0.3s;
&:hover {
   background: rgb(220,170,124) ;
   transform:scale(1.1);
    }

svg{
  width: 22px;
  height: 22px;
}

`
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const Profile = styled.div`
  width: 90%;
  height: 500px;
  background-color: #cccccc;
  border-radius: 6px;
  margin: 30px 0 30px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-flow:column;
  background-image: linear-gradient(
    to top,
    #d5d4d0 0%,
    #d6d3c8 1%,
    #eeeeec 31%,
    #efeeec 75%,
    #e9e9e7 100%
  );
 
@media(min-width:600px){
  flex-flow:row;
  height: 300px;

}
`;

const Shelf = styled.div`
  background-color: #cccccc;
  width: 90%;
  height: 400px;
  margin: 10px;
  border-radius: 6px;
  padding: 10px;
  display: flex;
`;
