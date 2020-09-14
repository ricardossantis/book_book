import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { getBooksReviews } from "../../redux/actions/books.js";
import { updateSession } from "../../redux/actions/session.js";

import { StyledTimeline, FramerLoading } from "./styled-timeline";

const Explorer = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [reviews, token] = useSelector((state) => [
    state.books.reviews,
    state.session.token,
  ]);

  useEffect(() => {
    dispatch(getBooksReviews(token));
    dispatch(updateSession());
  }, [dispatch, token]);

  setTimeout(() => setLoading(false), 600);

  return loading ? (
    <FramerLoading />
  ) : (
    <StyledTimeline>
      <StyledTimeline.Rows>
        {reviews.map((book) => (
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
            </StyledTimeline.Rows>
          </StyledTimeline.Book>
        ))}
      </StyledTimeline.Rows>
    </StyledTimeline>
  );
};

export default Explorer;
