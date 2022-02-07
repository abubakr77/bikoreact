import React from "react";
import { Link } from "react-router-dom";
import {
  NavbarSection,
  Logo,
  LogoText,
  LogoList,
  ListItem,
  Anchor,
  Lino,
} from "./style";

function Navebar() {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>

        <LogoList>
          <ListItem>
            <Lino to="/">Home</Lino>
          </ListItem>
          <ListItem>
            <Anchor href="#">Work</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Resume</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">About</Anchor>
          </ListItem>
          <ListItem>
            <Lino to="/contact">Contact</Lino>
          </ListItem>
        </LogoList>
      </div>
    </NavbarSection>
  );
}

export default Navebar;
