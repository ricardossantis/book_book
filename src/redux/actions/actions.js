import { GET_BOOKS_REVIEWS } from "./timeline.actions";

import axios from "../../api";

export const getBooksReviews = () => (dispatch) => {
  axios
    .get("/book_reviews")
    .then((response) => response.data)
    .then((response) => dispatch(setBooks(response)))
    .catch((error) => console.error(error));
};

const setBooks = (books) => ({
  type: GET_BOOKS_REVIEWS,
  books,
});
