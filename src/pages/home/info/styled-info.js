import styled from "styled-components";

export const InfoBox = styled.div`
  width: 94vw;
  height: 180vh;
  background-color: #c8c7c7;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (min-width: 550px) {
    height: 240vh;
  }

  @media (min-width: 768px) {
    height: 100vh;
    width: 44vw;
    border-radius: 0;
    justify-content: flex-start;
  }
`;

export const LinkBack = styled.a`
  font-family: "Inter", sans-serif;
  font-size: 1.4rem;
  font-weight: 900;
  margin: 6px;

  @media (min-width: 768px) {
    margin-top: 10px;
    font-size: 1.5rem;
  }
`;

export const Title = styled.h1`
  font-family: "Inter", sans-serif;
  font-size: 1.6rem;
  font-weight: 900;
  font-style: italic;
  margin: 0;
`;

export const Squad = styled.div``;

export const Development = styled.div`
  p {
    color: #000;
    font-size: 1.2rem;
    font-weight: 900;
  }

  img {
    width: 50px;
    margin: 0 2px;
  }

  @media (min-width: 768px) {
    p {
      font-size: 1.3rem;
      margin-bottom: 4px;
    }
    img {
      margin: 0 8px;
      width: 44px;
    }
  }
`;
