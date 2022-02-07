import React, { Component } from "react";
import Contact from "./components/Contact";
import Navebar from "./components/Navebar";
import Index from "./components/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navebar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    );
  }
}
