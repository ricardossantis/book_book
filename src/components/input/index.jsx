import React, { useState } from "react";
import {
  InputContainer,
  Icon,
  BoxIcon,
  InnerLabel,
  InputBox,
  StyledInput,
  StyledForm,
} from "./styled-input";

const StylezedInput = ({ icon, name, label, type, rules }) => {
  const [focusActive, setFocusActive] = useState(false);

  return (
    <InputContainer
      focusActive={focusActive}
      onFocus={() => setFocusActive(true)}
      onBlur={(e) => e.target.value === "" && setFocusActive(false)}
    >
      <BoxIcon>
        <Icon focusActive={focusActive} className={icon}></Icon>
      </BoxIcon>
      <InputBox>
        <InnerLabel focusActive={focusActive}>{label}</InnerLabel>
        <StyledForm.Item name={name} rules={rules}>
          <StyledInput type={type} />
        </StyledForm.Item>
      </InputBox>
    </InputContainer>
  );
};

export default StylezedInput;
