import React from "react";
import { Link } from "react-router-dom";
import { NavbarSection, Logo, LogoText, LogoList } from "./style";

function Navebar() {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>

        <LogoList>
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
        </LogoList>
      </div>
    </NavbarSection>
  );
}

export default Navebar;
