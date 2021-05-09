import React from "react";
import ReactDOM from "react-dom";

import { AppLayout } from "./components";
import { AdditionForms } from "./widgets";

import "normalize.css";
import "antd/dist/antd.css";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <AppLayout>
      <AdditionForms />
    </AppLayout>
  </React.StrictMode>,
  document.getElementById("root")
);
