import React from "react";

import { Menu } from "./components";
import Routes from "./routes/routes";
import "./App.css";

export default function App() {
  return (
    <div>
      <Menu />
      <div className="App">
        <Routes />
      </div>
    </div>
  );
}
