import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import App from "./components/App";

import "./style.css";
const store = createStore();

ReactDom.render(<App />, document.getElementById("root"));
