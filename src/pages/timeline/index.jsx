import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../redux/actions/books";

const Timeline = () => {
  let history = useHistory();
  const dispatch = useDispatch();

  const booksReviews = useSelector((state) => state.getBooksReview);

  const userInfo = useSelector((state) => state.setUserLogin);

  useEffect(() => {
    if (history.location.pathname === "/timeline") {
      dispatch(getBooks(userInfo.token));
      console.log(booksReviews);
    }
  }, [history]);

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
