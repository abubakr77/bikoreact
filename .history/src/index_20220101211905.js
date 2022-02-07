import React from "react";
import ReactDom from "react-dom";
import { createStore } from "redux";
import App from "./components/App";
import reducer from "./reduders/RootReducer";
import { Provider } from "react-redux";

import "./style.css";
const store = createStore(reducer);

ReactDom.render(<App />, document.getElementById("root"));
