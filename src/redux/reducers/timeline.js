import { GET_BOOK_REVIEWS } from "../actions/actions-type";

const defaultState = [];

const getBooksReview = (state = defaultState, action) => {
  switch (action.type) {
    case GET_BOOK_REVIEWS:
      return action.books;

    default:
      return state;
  }
};

export default getBooksReview;
