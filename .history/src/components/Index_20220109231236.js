import React, { Component } from "react";
import Home from "./components/Home";
import About from "./components/About";
import Profile from "./components/Profile";
import Portfolio from "./components/Portfolio";
import Socialmedia from "./components/Socialmedia";
import Works from "./components/Works";
import Footer from "./components/Footer";

export default class extends Component {
  render() {
    return (
      <div>
        
        <Home />
        <Works />
        <Portfolio />
        <Profile />
        <About />
        <Socialmedia />
        <Footer/>
        
      </div>
    );
  }