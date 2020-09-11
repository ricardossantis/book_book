import api from "../../services/api.js";
import { GET_BOOKS } from "./actions-type";

const getBooks = (user) => (dispatch) => {
  api
    .get(`/users/${user.user.id}/books/`, {
      headers: { authorization: user.token },
    })
    .then((res) => {
      dispatch(addBooks(res.data));
    });
};

const addBooks = (books) => ({ type: GET_BOOKS, payload: books });

export default getBooks;