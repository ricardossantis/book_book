import React from "react";
import { StyledApp } from "./style";

import { Menu } from "./components";
import Authenticator from "./components/authenticator/index.jsx";

export default function App() {
  return (
    <div>
      <Menu />
      <StyledApp>
        <Authenticator />
      </StyledApp>
    </div>
  );
}
