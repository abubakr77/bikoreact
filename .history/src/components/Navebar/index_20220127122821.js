import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navebar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <h2 className="logo-text">Ultra Profile</h2>
        </div>

        <ul className="ul-list">
          <li className="list-item">
            <a Link to="/">
              Home
            </a>
          </li>
          <li className="list-item">
            <a href="#">Work</a>
          </li>
          <li className="list-item">
            <a href="#">Portfolio</a>
          </li>
          <li className="list-item">
            <a href="#">Resume</a>
          </li>
          <li className="list-item">
            <a href="#">About</a>
          </li>
          <li className="list-item">
            <a Link to="/contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navebar;
