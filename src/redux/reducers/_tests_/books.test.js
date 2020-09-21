import books from "../books.js";

describe("ADD_BOOKS", () => {
  const newBook = { id: 1 };
  const oldBook = { id: 0 };
  it("adds a book", () => {
    const action = { type: "ADD_BOOKS", payload: [newBook] };
    const reducerResult = books({ books: [] }, action);

    expect(reducerResult).toStrictEqual({ books: [newBook] });
  });
  it("adds more books", () => {
    const action = { type: "ADD_BOOKS", payload: [oldBook, newBook] };
    const reducerResult = books({ books: [oldBook] }, action);

    expect(reducerResult).toStrictEqual({ books: [oldBook, newBook] });
  });
});

describe("REMOVE_BOOKS", () => {
  const arrayOFBooks = [{ id: 0 }, { id: 1 }, { id: 2 }];
  const bookToFilter = { id: 0 };
  it("removes a book", () => {
    const action = { type: "REMOVE_BOOK", payload: bookToFilter };
    const reducerResult = books({ books: arrayOFBooks }, action);

    expect(reducerResult).toStrictEqual({ books: [{ id: 1 }, { id: 2 }] });
  });
});
