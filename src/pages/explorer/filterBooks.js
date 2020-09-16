const getBooksCommentedByUsers = (acc, { title, creator }) => {
  if (acc[title]) {
    acc[title] = { ...acc[title], [creator.id]: 1 };
  } else {
    acc[title] = { [creator.id]: 1 };
  }
  return acc;
};

export const filterBooks = (arr, filteredBook, friends) => {
  switch (filteredBook) {
    case "read":
      const booksCommentedByUsers = arr.reduce(getBooksCommentedByUsers, []);
      const booksMostCommentedByUsers = arr.reduce(
        (acc, { title, creator }) => {
          if (acc[title] && booksCommentedByUsers[title][creator.id]) {
            acc[title] += booksCommentedByUsers[title][creator.id];
            booksCommentedByUsers[title][creator.id] = 0;
          } else {
            booksCommentedByUsers[title][creator.id] = 0;
            acc[title] = 1;
          }
          return acc;
        },
        []
      );

      return arr.filter(
        ({ title }) =>
          booksMostCommentedByUsers[title] > 1 &&
          (booksMostCommentedByUsers[title] = 1)
      );

    case "commented":
      const commented = arr.reduce((acc, { title }) => {
        acc[title] ? (acc[title] += 1) : (acc[title] = 1);
        return acc;
      }, []);

      return arr
        .filter(({ title }) => commented[title] >= 4 && (commented[title] = 1))
        .filter((book) => (!book.review ? (book.review = "") : book))
        .sort((a, b) => b.review.length - a.review.length);

    case "voted":
      return arr
        .filter((book) => book.grade >= 5)
        .sort((a, b) => b.grade - a.grade);

    case "friends":
      return arr.filter(
        (book) =>
          friends && Object.keys(friends).includes(book.creator.id.toString())
      );

    default:
      return arr;
  }
};

export const JsonKeys = [
  {
    value: "Sem Filtro",
    key: "default",
  },
  {
    value: "Mais Lidos",
    key: "read",
  },
  {
    value: "Mais Comentados",
    key: "commented",
  },
  {
    value: "Votados",
    key: "voted",
  },
  {
    value: "Por Amigos",
    key: "friends",
  },
];
