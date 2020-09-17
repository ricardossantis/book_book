import React from "react";
import { Menu } from "./components/exports.js";
import Routes from "./routes/routes.js";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="App">
        <Routes />
      </div>
    </div>
  );
};

export default App;
