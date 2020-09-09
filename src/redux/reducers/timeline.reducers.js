import { GET_BOOK_REVIEWS } from "../actions/actions-type";

const initialState = {
  books: [],
};

const timeline = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOK_REVIEWS:
      return { books: action.books };
    default:
      return state;
  }
};

export default timeline;
