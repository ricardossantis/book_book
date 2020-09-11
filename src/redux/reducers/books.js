import { GET_BOOKS } from "../actions/actions-type";

const defaultState = { books: [] };

const books = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_BOOKS:
      return { ...state, books: payload };

    default:
      return state;
  }
};

export default books;
