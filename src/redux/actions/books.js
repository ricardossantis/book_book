import api from "../api";
import { GETBOOKREVIEWS } from "./actions-type";

export const getBooks = (token) => (dispatch) => {
  console.log(token);
  api
    .get("/book_reviews", {
      headers: {
        Authorization: token,
      },
    })
    .then((response) => response.data)
    .then((res) => {
      console.log(res);
      dispatch(getBooksReview(res));
    })
    .catch(({ response }) => {
      console.log(response);
      return response;
    });
};

const getBooksReview = (books) => ({
  type: GETBOOKREVIEWS,
  books,
});
