import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./util/polyfill/index";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
