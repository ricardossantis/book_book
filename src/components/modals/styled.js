import styled from "styled-components";
import Select from "react-select";

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
  height: fit-content;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: grey;
  padding: 30px;
`;

export const StyledSelect = styled(Select)`
  .css-g1d714-ValueContainer {
    height: 55px;
    justify-content: center;
  }
`;
