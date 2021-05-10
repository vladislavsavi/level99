import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { AppLayout } from "./components";
import { AdditionForms, InitialTable, AdjectiveTables } from "./widgets";
import { store } from "./redux_store";

import "normalize.css";
import "antd/dist/antd.css";
import "./index.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppLayout>
        <AdditionForms />
        <InitialTable />
        <AdjectiveTables />
      </AppLayout>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
