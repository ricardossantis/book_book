import { GET_BOOKS } from "../actions/actions-type";

const defaultState = [];
//{
//   book: {
//     title: "",
//     author: "",
//     shelf: "",
//     image_url: "",
//     grade: "",
//     categories: [],
//     review: "",
//     google_book_id: "",
//   },
//};

const books = (state = defaultState, { type, payload }) => {
  switch (type) {
    case GET_BOOKS:
      return { ...state, payload };

    default:
      return state;
  }
};

export default books;
