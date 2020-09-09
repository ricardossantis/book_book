import React from "react";
import { StyledApp } from "./style";

import { Menu } from "./components";
import Routes from "./routes/routes";

export default function App() {
  return (
    <div>
      <Menu />
      <StyledApp>
        <Routes />
      </StyledApp>
    </div>
  );
}
