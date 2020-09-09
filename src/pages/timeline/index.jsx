import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/actions/books";

const Timeline = () => {
  const dispatch = useDispatch();

  const booksReviews = useSelector((state) => state.getBooksReview);
  const userInfo = useSelector((state) => state.session);

  useEffect(() => {
    if (userInfo.token) {
      dispatch(getBooks(userInfo.token));
    }
  }, [dispatch, userInfo]);

  return (
    <Explorer>
      <div>Explorer</div>
      <div>
        {booksReviews.map((book, key) => (
          <div key={key}>{book.title}</div>
        ))}
      </div>
    </Explorer>
  );
};

export default Timeline;

const Explorer = styled.div``;
