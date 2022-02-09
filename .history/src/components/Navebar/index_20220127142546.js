import React from "react";
import { Link } from "react-router-dom";
import { NavbarSection, Logo, LogoText, LogoList, ListItem } from "./style";

function Navebar() {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>

        <LogoList>
          <ListItem>
            <Link to="/">Home</Link>
          </ListItem>
          <ListItem>
            <a href="#">Work</a>
          </ListItem>
          <ListItem>
            <a href="#">Portfolio</a>
          </ListItem>
          <ListItem>
            <a href="#">Resume</a>
          </ListItem>
          <ListItem>
            <a href="#">About</a>
          </ListItem>
          <ListItem>
            <Link to="/contact">Contact</Link>
          </ListItem>
        </LogoList>
      </div>
    </NavbarSection>
  );
}

export default Navebar;
