import styled from "styled-components";

const StyledHeader = styled.header`
  // position: fixed;
  background-color: #AEB6BF
  width: 100%;
  height: 50px;
  
`;
const StyledMenu = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

StyledMenu.Title = styled.h2`
  display: flex;

  font-family: Roboto;
  font-weight: 700;
  font-size: 2rem;
  margin: 0 10px;

  p {
    font-size: 0.8rem;
  }
`;

StyledMenu.item = styled.div`
  font-family: Roboto;
  font-weight: 700;
  font-size: 1.2rem;
  margin: 0 8px;

  // height: 40px;

  &:last-child {
    margin-right: 20px;
  }

  a:hover {
    color: #1c2833;
  }
`;
StyledMenu.Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

StyledMenu.SubMenu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

StyledMenu.SubMenu.Options = styled.li`
  margin-top: 70px;
  :hover {
    * {
      visibility: visible;
      border-radius: 4px;
      background-color: #979a9a;
      padding: 2px;
    }
  }
`;

StyledMenu.SubMenu.Link = styled.li`
  background-color: #979a9a;

  visibility: hidden;
  cursor: pointer;
  margin: 5px 0;
`;

export { StyledHeader, StyledMenu };
