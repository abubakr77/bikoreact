import React from "react";
import {
  Portfolioo,
  PortList,
  PortfolioTit,
  PortItem,
  TitleSpan,
  BoxDiv,
} from "./style.js";

function Portfolio() {
  return (
    <Portfolioo>
      <PortfolioTit>
        <TitleSpan>My</TitleSpan> Portfolio
      </PortfolioTit>
      <PortList>
        <PortItem>All</PortItem>
        <PortItem>HTML</PortItem>
        <PortItem>Photoshop</PortItem>
        <PortItem>Wordpress</PortItem>
        <PortItem>Mobile</PortItem>
      </PortList>

      <BoxDiv>
        <div>
          <img src="images/portfolio-img1.jpg" alt="" />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>

        <div>
          <img src="images/portfolio-img2.jpg" alt="" />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>

        <div>
          <img src="images/portfolio-img3.jpg" alt="" />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>

        <div>
          <img src="images/portfolio-img4.jpg" alt="" />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>

        <div>
          <img src="images/portfolio-img5.jpg" alt="" />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>

        <div>
          <img src="images/portfolio-img6.jpg" alt="" />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>

        <div>
          <img src="images/portfolio-img7.jpg" alt="" />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>

        <div>
          <img src="images/portfolio-img8.jpg" alt="" />
          <p class="overlay">
            <span>Show Image</span>
          </p>
        </div>
      </BoxDiv>
    </Portfolioo>
  );
}

export default Portfolio;
