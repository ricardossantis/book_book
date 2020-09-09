import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooksReviews } from "../../redux/actions/timeline.actions";

import StyledTimeline from "./styled-timeline";

export default function Timeline() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.timeline.books);
  const token = useSelector((state) => state.session.token);

  useEffect(() => {
    dispatch(getBooksReviews(token));
  }, [dispatch, token]);

  return (
    <StyledTimeline>
      <StyledTimeline.Title>Timeline</StyledTimeline.Title>
      <StyledTimeline.Rows>
        {books.map((book) => {
          console.log(book);
          return (
            <StyledTimeline.Book key={book.id}>
              <StyledTimeline.Book.Title>
                Book Title: {book.title}
              </StyledTimeline.Book.Title>

              <StyledTimeline.User>
                <StyledTimeline.User.Image src={book.creator.userImage} />

                <StyledTimeline.User.Name>
                  {book.creator.name}
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
          );
        })}
      </StyledTimeline.Rows>
    </StyledTimeline>
  );
}
