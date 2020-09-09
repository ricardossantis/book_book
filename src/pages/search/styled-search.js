import styled from "styled-components";

const StyledSearch = styled.section``;

StyledSearch.Title = styled.h1`
  margin: 0;
`;
StyledSearch.Rows = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

StyledSearch.Book = styled.div`
  border: 1px solid black;
  margin: 5px;
  width: 500px;
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

export default StyledSearch;
