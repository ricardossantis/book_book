import React from "react";

import Authenticator from "../authenticator";
import { StyledHeader, StyledMenu } from "./styledmenu";

export default function Menu() {
  return (
    <StyledHeader>
      <StyledMenu>
        <h1>BookBook</h1>
        <Authenticator />
      </StyledMenu>
    </StyledHeader>
  );
}
