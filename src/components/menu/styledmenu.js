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

StyledMenu.SubMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

StyledMenu.SubMenu.Options = styled.li`
  :hover {
    * {
      visibility: visible;
    }
  }
`;

StyledMenu.SubMenu.Link = styled.li`
  visibility: hidden;
  cursor: pointer;
  margin: 5px 0;
`;

export { StyledHeader, StyledMenu };
