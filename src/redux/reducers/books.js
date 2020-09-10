import { GET_BOOKS } from "../actions/actions-type";

const defaultState = { book: {} };

const books = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_BOOKS:
      const { book } = payload;
      return { ...state, book };

    default:
      return state;
  }
};

export default books;
