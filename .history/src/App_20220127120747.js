import React, { Component } from "react";
import Contact from "./components/Contact";
import Navebar from "./components/Navebar";
import Index from "./components/Index";
import "./components/index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navebar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/b" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
