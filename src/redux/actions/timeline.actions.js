import axios from "../api";
import { GET_BOOK_REVIEWS } from "../actions/actions-type";

export const getBooksReviews = (token) => (dispatch) => {
  const headers = { headers: { authorization: token } };
  axios
    .get("/book_reviews", headers)
    .then((response) => response.data)
    .then((response) => dispatch(setBooks(response)))
    .catch((error) => console.error(error));
};

const setBooks = (books) => ({
  type: GET_BOOK_REVIEWS,
  books,
});
