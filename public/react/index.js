import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router } from "react-router-dom";
import "regenerator-runtime/runtime";

import { App } from "./components/App";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
