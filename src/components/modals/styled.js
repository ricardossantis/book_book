import styled from "styled-components";

export const ShadowBox = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #0004;
  position: fixed;
  z-index: -1;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const StyledModal = styled.div`
  width: 500px;
  height: 400px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: grey;
  padding: 30px;
`;
