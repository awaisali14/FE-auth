import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AppStoreCom } from "./AppContext";
ReactDOM.render(
  <AppStoreCom>
    <App />
  </AppStoreCom>,
  document.getElementById("root")
);
