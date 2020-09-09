import styled from "styled-components";

const StyledHeader = styled.header``;
const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
StyledMenu.item = styled.div`
  margin: 5px;
`;
StyledMenu.Section = styled.section`
  display: flex;
`;

export { StyledHeader, StyledMenu };
