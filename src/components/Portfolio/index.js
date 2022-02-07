import axios from "axios";
import React, { useState, useEffect } from "react";
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
  useEffect(() => {
    axios.get("js/data.json").then((res) => {
      setImages(res.data.portfolio);
    });
  }, []);
  const portfolioImage = images.map((imageItem) => {
    return (
      <BoxDiv key={imageItem.id}>
        <Image src={imageItem.image} alt="" />
        <Overlay>
          <OverlaySpan>Show Image</OverlaySpan>
        </Overlay>
      </BoxDiv>
    );
  });
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

      <div className="box">{portfolioImage}</div>
    </Portfolioo>
  );
}

export default Portfolio;
