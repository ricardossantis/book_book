import { ADD_BOOKS } from "../actions/actionsType";

const defaultState = { books: [] };

const books = (state = defaultState, { type, payload }) => {
  switch (type) {
    case ADD_BOOKS:
      return { ...state, books: payload };

    default:
      return state;
  }
};

export default books;
