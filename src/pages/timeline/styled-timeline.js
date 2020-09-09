import styled from "styled-components";

const StyledTimeline = styled.section``;

StyledTimeline.Title = styled.h1`
  margin: 0;
`;
StyledTimeline.Rows = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

StyledTimeline.User = styled.figure`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
StyledTimeline.User.Image = styled.img`
  background-image: url("http://www.ecp.org.br/wp-content/uploads/2017/12/default-avatar.png");
  width: 70px;
  height: 70px;
`;
StyledTimeline.User.Name = styled.figcaption``;
StyledTimeline.User.Review = styled.p`
  font-size: 0.7rem;
`;

StyledTimeline.Book = styled.div`
  border: 1px solid black;
  margin: 5px;
  width: 500px;
`;
StyledTimeline.Book.Title = styled.h4`
  margin: 0;
`;
StyledTimeline.Book.Image = styled.img`
  width: 130px;
  height: 200px;
`;
StyledTimeline.Book.Description = styled.p``;

export default StyledTimeline;
