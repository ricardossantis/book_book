import { GET_BOOKS_REVIEWS } from "../actions/timeline.actions";

const initialState = {
  books: [],
};

const timeline = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_REVIEWS:
      return { books: action.books };
    default:
      return state;
  }
};

export default timeline;
