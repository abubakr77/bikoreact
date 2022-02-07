import React, { Component } from "react";
import Contact from "./components/Contact";
import Navebar from "./components/Navebar";
import Index from "./components/Index";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Navebar />
          <Route path="/" component={Index}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
