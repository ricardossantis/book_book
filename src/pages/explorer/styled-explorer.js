import styled from "styled-components";
import FramerLoading from "../../components/framerLoading";

export const Loading = styled.div`
  width: 96vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ExplorerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Filters = styled.div`
  width: 100%;
  font-family: "Scan", sans-serif;
  font-size: 1.2rem;
  border: 2px solid #fff;
  margin: 10px;

  select {
    font-weight: 800;
    width: 100%;
    position: relative;
    margin: 10px 0;
    background-color: #000;
    padding: 5px;
    outline: none;
    border: none;
    margin: 0;

    option {
      font-weight: 800;
    }
  }

  @media (min-width: 550px) {
    // width: 80%;
  }

  @media (min-width: 768px) {
    align-self: flex-start;
    width: 20%;
    font-size: 1.3rem;
  }
`;

export const Filter = styled.option`
  font-size: 80%;
  color: #000;
  outline: none;
  margin: 2px;
  color: #fff;
  cursor: pointer;
  border: 1px solid #e1332d;
  transition: all 150ms linear;
`;

export const Books = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 94vw;
  justify-content: space-evenly;

  @media (min-width: 768px) {
    align-items: center;
    justify-content: center;

    width: auto;
    justify-content: flex-start;
  }
`;

export { FramerLoading };
