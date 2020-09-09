import { GETBOOKREVIEWS } from "../actions/actions-type";

const defaultState = [];

const getBooksReview = (state = defaultState, action) => {
  switch (action.type) {
    case GETBOOKREVIEWS:
      return action.books;

    default:
      return state;
  }
};

export default getBooksReview;
