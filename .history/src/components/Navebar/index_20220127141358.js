import React from "react";
import { Link } from "react-router-dom";
import { NavbarSection, Logo, LogoText } from "./style";

function Navebar() {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>

        <ul className="ul-list">
          <li className="list-item">
            <Link to="/">Home</Link>
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
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </NavbarSection>
  );
}

export default Navebar;
