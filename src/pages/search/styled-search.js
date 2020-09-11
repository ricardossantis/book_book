import styled from "styled-components";

export const StyledSearch = styled.section``;

StyledSearch.Title = styled.h1`
  margin: 0;
`;
StyledSearch.Rows = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

StyledSearch.Book = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 5px;
  width: 500px;
  background-color: #cccccc;
  border-radius: 8px;
`;
StyledSearch.Book.Title = styled.h4`
  margin: 0;
`;
StyledSearch.Book.Image = styled.img`
  width: 130px;
  height: 200px;
  &:hover {
    cursor: pointer;
  }
`;
StyledSearch.Book.Description = styled.p``;

export const StyledSearchField = styled.div``;

export const StyledInput = styled.input`
  color: #000000;
`;

export const StyledSearchButton = styled.button`
  background-color: #666;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledAddButtonsDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const StyledAddButton = styled.button`
  background-color: #666;
  &:hover {
    cursor: pointer;
  }
`;
