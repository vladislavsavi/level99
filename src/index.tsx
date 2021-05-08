import React from "react";
import ReactDOM from "react-dom";

import { AppLayout, FirstFormAdditions } from "./components";

import "normalize.css";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <AppLayout>
      <FirstFormAdditions />
    </AppLayout>
  </React.StrictMode>,
  document.getElementById("root")
);
