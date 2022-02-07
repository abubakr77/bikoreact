import React, { useState } from "react";
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
  const [images, setImages] = useState([]);
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

      <div className="box">
        <BoxDiv>
          <Image src="images/portfolio-img1.jpg" alt="" />
          <Overlay>
            <OverlaySpan>Show Image</OverlaySpan>
          </Overlay>
        </BoxDiv>

        <BoxDiv>
          <Image src="images/portfolio-img2.jpg" alt="" />
          <Overlay>
            <OverlaySpan>Show Image</OverlaySpan>
          </Overlay>
        </BoxDiv>
      </div>
    </Portfolioo>
  );
}

export default Portfolio;
