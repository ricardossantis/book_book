import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getBooksReviews } from "../../redux/actions/books.js";
import { updateSession, addFriend } from "../../redux/actions/session.js";

import { StyledTimeline, FramerLoading } from "./styled-timeline";
import { filterBooks, JsonKeys } from "./filterBooks.js";

const Explorer = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [filteredBook, setFilteredBook] = useState("read");
  const [reviews, { user, friends, token }] = useSelector((state) => [
    state.books.reviews,
    state.session,
  ]);

  const filterBook = (arr) => {
    switch (filteredBook) {
      case "read":
        const mostCommentedByUser = arr.reduce((acc, cur) => {
          if (acc[cur.title]) {
            acc[cur.title] = { ...acc[cur.title], [cur.creator.id]: 1 };
          } else {
            acc[cur.title] = { [cur.creator.id]: 1 };
          }

          return acc;
        }, []);

        const mostReadByUser = arr.reduce((acc, cur) => {
          if (
            acc[cur.title] &&
            mostCommentedByUser[cur.title][cur.creator.id]
          ) {
            acc[cur.title] += mostCommentedByUser[cur.title][cur.creator.id];
            mostCommentedByUser[cur.title][cur.creator.id] = 0;
          } else {
            mostCommentedByUser[cur.title][cur.creator.id] = 0;
            acc[cur.title] = 1;
          }
          return acc;
        }, []);

        return arr.filter((book) => {
          if (mostReadByUser[book.title] > 1) {
            mostReadByUser[book.title] = 1;
            return book;
          }
        });
      case "commented":
        const mostCommented = arr.reduce((acc, cur) => {
          acc[cur.title] ? (acc[cur.title] += 1) : (acc[cur.title] = 1);
          return acc;
        }, []);

        return arr
          .filter((book) => {
            if (mostCommented[book.title] >= 4) {
              mostCommented[book.title] = 1;
              return book;
            }
          })
          .map((book) => {
            if (!book.review) {
              book.review = "";
            }
            return book;
          })
          .sort((a, b) => b.review.length - a.review.length);
      case "voted":
        return arr
          .filter((book) => book.grade >= 5)
          .sort((a, b) => b.grade - a.grade);
      case "fiends":
        return arr.filter(
          (book) =>
            friends && Object.keys(friends).includes(book.creator.id.toString())
        );
      default:
        return arr;
    }
  };
  useEffect(() => {
    dispatch(getBooksReviews(token));
    dispatch(updateSession());
  }, [dispatch, token]);

  setTimeout(() => setLoading(false), 600);

  return loading ? (
    <FramerLoading />
  ) : (
    <StyledTimeline>
      <div style={{ color: "black" }}>
        {JsonKeys.map(({ value, key }, index) => (
          <input
            key={index}
            type="button"
            value={value}
            onClick={() => setFilteredBook(key)}
          />
        ))}
      </div>
      <StyledTimeline.Rows>
        {filterBooks(reviews, filteredBook, friends).map((book) => (
          <StyledTimeline.Book key={book.id}>
            <StyledTimeline.Book.Title>{book.title}</StyledTimeline.Book.Title>

            <StyledTimeline.User>
              <StyledTimeline.User.Image src={book.creator.userImage} />
              <Link to={`/perfil/${book.creator.id}`}>perfil do usuario </Link>

              <StyledTimeline.User.Name>
                {book.creator.user}
              </StyledTimeline.User.Name>
            </StyledTimeline.User>

            <StyledTimeline.Rows>
              <StyledTimeline.Book.Image
                src={book.image_url}
                alt={book.author}
              />

              <StyledTimeline.User.Review>
                Review: {book.review}
              </StyledTimeline.User.Review>
              {book.creator.id !== user.id && (
                <input
                  disabled={friends && friends[book.creator.id] ? true : false}
                  type="button"
                  onClick={() => dispatch(addFriend(book.creator))}
                  value={
                    friends && friends[book.creator.id]
                      ? "Amigo"
                      : "Adicionar Amigo"
                  }
                  style={{ color: "black" }}
                />
              )}
            </StyledTimeline.Rows>
          </StyledTimeline.Book>
        ))}
      </StyledTimeline.Rows>
    </StyledTimeline>
  );
};

export default Explorer;
