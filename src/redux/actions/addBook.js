import api from "../../services/api.js";
import { ADD_BOOKS } from "./actionsType";

const getBooks = ({ user: { id }, token }) => (dispatch) => {
  id !== undefined &&
    api
      .get(`/users/${id}/books/`, {
        headers: { authorization: token },
      })
      .then(({ data }) => {
        dispatch(addBooks(data));
      });
};

const addBooks = (books) => ({ type: ADD_BOOKS, payload: books });

export default getBooks;
