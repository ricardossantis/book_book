import styled from "styled-components";

export const DevCard = styled.div`
  width: 84vw;
  height: 30vh;
  background-color: #fff;
  border-radius: 14px;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  color: #000;
  box-shadow: 2px 2px 8px #0066ff;
  margin: 16px 0;

  @media (min-width: 550px) {
    height: 38vh;
  }

  @media (min-width: 768px) {
    margin: 22px 0;
    width: 36vw;
    height: 17vh;
  }
`;

export const Photo = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;

  @media (min-width: 550px) {
    width: 55px;
    height: 55px;
  }

  @media (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
`;

export const Dev = styled.div`
  width: 40vw;
  text-align: left;

  h2 {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    font-weight: 900;
    margin-bottom: 0;
  }

  h3 {
    font-size: 1rem;
    font-style: italic;
  }

  @media (min-width: 550px) {
    width: 50vw;
  }

  @media (min-width: 768px) {
    width: 21vw;

    h2 {
      font-size: 1.3rem;
    }

    h3 {
      font-size: 1.1rem;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column-reverse;

  img {
    width: 30px;
  }

  @media (min-width: 550px) {
    flex-direction: row;

    img {
      width: 40px;
    }
  }
`;

export const Text = styled.div`
  padding: 4px;
  text-align: left;
  font-size: 0.8rem;

  @media (min-width: 550px) {
    font-size: 0.9rem;
  }

  @media (min-width: 768px) {
    font-size: 0.9rem;
  }
`;
