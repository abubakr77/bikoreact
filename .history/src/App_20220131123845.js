import React, { Component } from "react";
import Contact from "./components/Contact";
import Navebar from "./components/Navebar";
import Index from "./components/Index";
import "./index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Works from "./components/Works";
import About from "./components/About";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navebar />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/works" element={<Works />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
