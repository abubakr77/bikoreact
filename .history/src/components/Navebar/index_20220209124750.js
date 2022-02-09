import React from "react";
import { Link } from "react-router-dom";
import {
  NavbarSection,
  Logo,
  LogoText,
  LogoList,
  ListItem,
  Anchor,
  Inputt,
  Labell,
} from "./style";

function Navebar() {
  return (
    <NavbarSection>
      <div className="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>
        <Inputt type="checkbox" id="nav" />
        <Labell htmlFor="nav"></Labell>

        <LogoList>
          <ListItem>
            <Anchor href="/">Home</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/works">Works</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/portfolio">Portfolio</Anchor>
          </ListItem>

          <ListItem>
            <Anchor href="/about">About</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="/contact">Contact</Anchor>
          </ListItem>
        </LogoList>
      </div>
    </NavbarSection>
  );
}

export default Navebar;
