import React from "react";
import { StyledApp } from "./style";

import { Menu } from "./components";
import Routes from "./routes/routes";

export default function App() {
  return (
    <StyledApp>
      <Menu />
      <Routes />
    </StyledApp>
  );
}
