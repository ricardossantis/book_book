import styled from "styled-components";
import library from "../../assets/img/library.jpeg";

export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${library});
  background-repeat: no-repeat;
  background-size: cover;
  overflow: scroll;
  text-align: center;

  // ANTD RESET
  .ant-input {
    border: none;
    outline: none;
    background: none;
    background-color: none;
    border: none;
    box-shadow: none;
  }
  ant-input:focus,
  .ant-input-focused {
    border-color: none;
    border-right-width: none;
    outline: none;
    -webkit-box-shadow: none;
    box-shadow: none;
  }
  .ant-form-item-has-error .ant-form-item-explain,
  .ant-form-item-has-error .ant-form-item-split {
    margin-top: 13px;
    color: #f00;
  }

  @media (min-width: 550px) {
    height: 144vh;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    height: 100vh;
    background-size: 1450px 1000px;
    overflow: hidden;
  }
`;

export const Logo = styled.div`
  @media (min-width: 768px) {
    width: 55vw;
    height: 100vh;
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const Title = styled.h1`
  font-family: "Scada", sans-serif;
  font-size: 380%;
  height: 6rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 8px 8px 16px #000;
  margin: 0;

  @media (min-width: 768px) {
    height: auto;
    font-size: 9vw;
    margin: 10px;
  }
`;

export const Slogan = styled.div`
  font-family: "Scada", sans-serif;
  color: #fff;
  font-size: 1.5rem;
  text-shadow: 0 0 12px #000, 0 0 12px #000;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    margin: 0;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 2rem;
    text-align: left;
    margin-bottom: 16vh;

    p {
      margin: 0;
      padding: 0;
      height: 2.6rem;
    }
  }
`;

export const FormBox = styled.div`
  // background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
  background-image: linear-gradient(
    to top,
    #d5d4d0 0%,
    #d6d3c8 1%,
    #eeeeec 31%,
    #efeeec 75%,
    #e9e9e7 100%
  );
  margin: 1vh 2vw;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    border-radius: 0;
    width: 44vw;
    height: 100vh;
    margin: 0;
  }
`;
