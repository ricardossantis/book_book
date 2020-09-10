import api from "../../services/api";
import { GET_BOOK_REVIEWS } from "../actions/actions-type";

export const getBooksReviews = (token) => (dispatch) => {
  const headers = { headers: { authorization: token } };
  api
    .get("/book_reviews", headers)
    .then((response) => response.data)
    .then((response) => {
      dispatch(setBooks(response));
    })
    .catch((error) => console.log(error));
};

const setBooks = (books) => ({
  type: GET_BOOK_REVIEWS,
  books,
});
