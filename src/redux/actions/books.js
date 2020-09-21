import api from "../../services/api.js";
import { getUserAndToken } from "../../utils/getUsers.js";
import { ADD_BOOKS, REMOVE_BOOK, ADD_BOOKS_REVIEWS } from "./actionsType.js";

const createHeader = (token = localStorage.getItem("token")) => ({
  headers: { authorization: token },
});

export const getBooks = ({ user, token }) => (dispatch) => {
  user.id !== undefined &&
    api
      .get(`/users/${user.id}/books`, createHeader(token))
      .then((response) => {
        console.warn(`getBooks Status:${response.status}`);
        dispatch(addBooks(response.data));
      })
      .catch((error) => console.log(error.message));
};

export const deleteBook = ({ user, book, token }) => (dispatch) => {
  api
    .delete(`/users/${user.id}/books/${book.id}`, createHeader(token))
    .then((response) => {
      console.warn(`deleteBook Status:${response.status}`);
      dispatch(removeBook(book));
    })
    .catch((error) => console.error(error));
};

export const updateBook = (change, user, book) => (dispatch) => {
  api
    .put(`/users/${user.id}/books/${book.id}`, change, createHeader())
    .then((response) => {
      console.warn(`updateBook Status:${response.status}`);
      dispatch(getBooks(getUserAndToken()));
    })
    .catch((error) => console.error(error));
};

export const getBooksReviews = (token) => (dispatch) => {
  api
    .get("/book_reviews", createHeader(token))
    .then((response) => {
      console.warn(`getBooksReviews Status:${response.status}`);
      dispatch(addReviews(response.data));
    })
    .catch((error) => console.error(error));
};

const addBooks = (books) => ({
  type: ADD_BOOKS,
  payload: books,
});

const removeBook = (book) => ({
  type: REMOVE_BOOK,
  payload: book,
});

const addReviews = (reviews) => ({
  type: ADD_BOOKS_REVIEWS,
  payload: reviews,
});
