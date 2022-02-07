import React from "react";
import {
  Portfolioo,
  PortList,
  PortfolioTit,
  PortItem,
  TitleSpan,
  Overlay,
  Image,
  BoxDiv,
  OverlaySpan,
} from "./style.js";

function Portfolio() {
  return (
    <Portfolioo>
      <PortfolioTit>
        <TitleSpan>My</TitleSpan> Portfolio
      </PortfolioTit>
      <PortList>
        <PortItem active>All</PortItem>
        <PortItem>HTML</PortItem>
        <PortItem>Photoshop</PortItem>
        <PortItem>Wordpress</PortItem>
        <PortItem>Mobile</PortItem>
      </PortList>

      <BoxDiv>
        <div>
          <Image src="images/portfolio-img1.jpg" alt="" />
          <Overlay>
            <OverlaySpan>Show Image</OverlaySpan>
          </Overlay>
        </div>

        <div>
          <Image src="images/portfolio-img2.jpg" alt="" />
          <Overlay>
            <OverlaySpan>Show Image</OverlaySpan>
          </Overlay>
        </div>
      </BoxDiv>
    </Portfolioo>
  );
}

export default Portfolio;
