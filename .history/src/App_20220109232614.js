import React, { Component } from "react";
import Contact from "./components/Contact";
import Navebar from "./components/Navebar";
import Index from "./components/Index";
import { BrowserRouter, Route } from "react-router-dom";

export default class extends Component {
  render() {
    return (
      <div>
        <Navebar />
        <Index />
        <Contact />
      </div>
    );
  }
}
