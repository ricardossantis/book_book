import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooksReviews } from "../../redux/actions/timelineActions";
import { StyledTimeline, FramerLoading } from "./styled-timeline";

export default function Timeline() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [books, token] = useSelector((state) => [
    state.timeline.books,
    state.session.token,
  ]);

  useEffect(() => {
    dispatch(getBooksReviews(token));
  }, [dispatch, token]);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  switch (loading) {
    default:
      return <FramerLoading />;

    case false:
      return (
        <StyledTimeline>
          {/* <StyledTimeline.Title>Timeline</StyledTimeline.Title> */}
          <StyledTimeline.Rows>
            {books.map((book) => {
              return (
                <StyledTimeline.Book key={book.id}>
                  <StyledTimeline.Book.Title>
                    {book.title}
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
}
