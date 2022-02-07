import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reminder from "./reducers";
import "bootstrap/dist/css/bootstrap.min.css";
import reminders from "./reducers";
const store = createStore(reminders);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
