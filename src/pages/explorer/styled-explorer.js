import styled from "styled-components";

export const ExplorerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  scroll-behavior: smooth;
`;

export const Set = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  scroll-behavior: smooth;
  margin-top: 40px;
`;

export const Title = styled.div`
  position: absolute;
  top: 0;
  left: 5vw;

  h1 {
    font-family: "Helvetica", sans-serif;
    font-weight: 900;
    color: #e5e5e5;
    font-size: 1.6vw;
    display: table-cell;
  }
`;

export const BookSection = styled.section`
  scroll-behavior: smooth;
  position: relative;
  width: 100%;
  height: 315px;
  display: grid;
  grid-template-columns: repeat(8, 12%);
  column-gap: 9px;
  grid-template-rows: 310px;
`;

export const Btn = styled.button`
  position: absolute;
  width: 100px;
  height: 100%;
  outline: none;
  color: #fff;
  font-size: 6em;
  border-radius: 3px;
  background: rgb(0, 0, 0);
  border: none;
  text-decoration: none;
  padding: 0;
  display: flex;
  text-align: center;

  svg {
    height: 100%;
    cursor: pointer;
    pointer-events: auto;
    border-top: 60px solid transparent;
    border-bottom: 60px solid transparent;
  }

  :nth-of-type(1) {
    top: 0;
    bottom: 0;
    left: 0;
    background: linear-gradient(
      -90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );
  }
  &:nth-of-type(2) {
    top: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 1) 100%
    );

    svg {
      margin-left: 8px;
    }
  }
`;
