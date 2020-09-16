import styled from "styled-components";

export const StyledSearch = styled.section``;

export const StyledImg = styled.img`
  width: 200px !important;
  height: 200px;
  &:hover {
    cursor: pointer;
  }
`;

export const StyledButtonContainer = styled.div`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 20px;
`;

export const StyledAddButtonsDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
`;

export const StyledAddButton = styled.button`
  background-color: #666;
  &:hover {
    cursor: pointer;
  }
`;
