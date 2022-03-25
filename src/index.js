import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//import styling
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/css/reset.css";
import "./stylesheets/css/index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
