import {
  ADD_BOOKS,
  REMOVE_BOOK,
  ADD_BOOKS_REVIEWS,
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
        books: state.books.filter((book) => book !== payload),
      };

    default:
      return state;
  }
};

export default books;
