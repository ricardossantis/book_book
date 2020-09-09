import api from "../api";
import { GETBOOKREVIEWS } from "./actions-type";

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
  type: GETBOOKREVIEWS,
  books,
});
