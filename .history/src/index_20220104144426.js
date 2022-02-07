import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reminder from "./reducers";
import "bootstrap/dist/css/bootstrap.min.css";
import remider from "./reducers";
const store = createStore(remider);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
