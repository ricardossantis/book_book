import {
  ADD_BOOKS,
  REMOVE_BOOK,
  ADD_BOOKS_REVIEWS,
  CLEAR_BOOKS,
} from "../actions/actionsType.js";

const defaultState = { books: [], reviews: [] };

const books = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_BOOKS:
      return { ...state, books: payload };

    case ADD_BOOKS_REVIEWS:
      return { ...state, reviews: payload };

    case REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter((book) => {
          return book.id !== payload.id;
        }),
      };

    case CLEAR_BOOKS:
      return defaultState;

    default:
      return state;
  }
};

export default books;
