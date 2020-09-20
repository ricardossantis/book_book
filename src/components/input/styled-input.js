import styled from "styled-components";
import { Form, Input } from "antd";

export const InputContainer = styled.div`
  font-family: "Inter", sans-serif;
  position: relative;
  display: grid;
  grid-template-columns: 8% 83%;
  margin: 20px 0;
  margin: ${(props) => props.margin};
  padding: 5px 0;
  border-bottom: 2px solid #d9d9d9;

  @media (min-width: 768px) {
    margin: 12px 0;
  }
`;

export const BoxIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled.i`
  color: #1e6854;
  margin-top: 60%;
  ${(props) => props.focusActive && `color: var(--color-primary);`}
`;

export const InputBox = styled.div`
  position: relative;
  height: 40px;
`;

export const InnerLabel = styled.h2`
  position: absolute;
  left: 2%;
  top: 36%;
  font-family: "Inter", sans-serif;
  font-size: 1rem;
  color: #495057;
  transition: 0.3s;

  @media (min-width: 768px) {
    font-size: 1.3rem;

    ${(props) =>
    props.focusActive &&
    `
    left: 2%;
    font-size: 1rem;
    top: -14px;

    `}
  }

  ${(props) =>
    props.focusActive &&
    `
  left: 2%;
  font-size: 0.9rem;
  top: -10px;
  `}
`;

export const StyledForm = styled(Form)`
  width: 100px;
`;

export const StyledInput = styled(Input)`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  padding: 0.5rem 0.7rem;
  font-size: 1.2rem;
  color: #555;
  margin-top: 14px;
  margin-left: 10px;  ​
  box-shadow: none !important;
  text-decoration:none;
  outline: none;
  background: none;
  background-color: none;
  border: none;

&:focus{
  box-shadow: none !important;
  
}

  @media (min-width: 550px) {
    margin-top: 0px;
    margin-left: 10px;  ​
  }

  @media (min-width: 768px) {
    margin-top: 14px;
    margin-left: 2px; 
  }
  
`;
