import React from "react";
import {
  StyledImg,
  StyledButtonContainer,
  StyledAddButtonsDiv,
  StyledAddButton,
} from "./styledCard.js";

function SearchCard({ book, handleBookClick }) {
  const {
    volumeInfo: { title, authors = [], imageLinks = "" },
  } = book;
  return (
    <div>
      <StyledImg src={imageLinks.thumbnail} alt={authors[0]} />
      <StyledButtonContainer>
        <p>Book Title: {title}</p>

        <StyledAddButtonsDiv>
          <StyledAddButton onClick={() => handleBookClick(1, book)}>
            Quero Ler
          </StyledAddButton>
          <StyledAddButton onClick={() => handleBookClick(2, book)}>
            Lendo
          </StyledAddButton>
          <StyledAddButton onClick={() => handleBookClick(3, book)}>
            Lido
          </StyledAddButton>
        </StyledAddButtonsDiv>
      </StyledButtonContainer>
    </div>
  );
}

export default SearchCard;
