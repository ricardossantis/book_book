import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBooksReviews } from "../../redux/actions/actions";

import StyledTimeline from "./styled-timeline";

export default function Timeline() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.timeline.books);

  useEffect(() => {
    dispatch(getBooksReviews());
  }, [dispatch]);

  return (
    <StyledTimeline>
      <StyledTimeline.Title>Timeline</StyledTimeline.Title>
      <StyledTimeline.Rows>
        {books.map(
          ({
            title,
            author,
            creator: { image_url: userImage, name },
            image_url,
            id,
            review,
          }) => (
            <StyledTimeline.Book key={id}>
              <StyledTimeline.Book.Title>
                Book Title: {title}
              </StyledTimeline.Book.Title>
              <StyledTimeline.User>
                <StyledTimeline.User.Image
                  src={userImage}
                  width={70}
                  height={70}
                />
                <StyledTimeline.User.Name>{name}</StyledTimeline.User.Name>
              </StyledTimeline.User>
              <StyledTimeline.Rows>
                <StyledTimeline.Book.Image
                  src={image_url}
                  alt={author}
                  width={130}
                  height={200}
                />

                <StyledTimeline.User.Review>
                  Review: {review}
                </StyledTimeline.User.Review>
              </StyledTimeline.Rows>
            </StyledTimeline.Book>
          )
        )}
      </StyledTimeline.Rows>
    </StyledTimeline>
  );
}
