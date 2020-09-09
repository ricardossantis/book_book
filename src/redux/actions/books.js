import api from "../api";
import { GET_BOOK_REVIEWS } from "./actions-type";

export const getBooks = (token) => (dispatch) => {
  api
    .get("/book_reviews", {
      headers: {
        Authorization: token,
      },
    })
    .then((res) => {
      dispatch(getBooksReview(res.data));
    });
};

const getBooksReview = (books) => ({
  type: GET_BOOK_REVIEWS,
  books,
});
