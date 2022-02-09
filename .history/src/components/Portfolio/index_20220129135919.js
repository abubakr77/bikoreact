import React from "react";
import {
  Portfolioo,
  PortList,
  PortfolioTit,
  PortItem,
  TitleSpan,
} from "./style.js";

function Portfolio() {
  return (
    <Portfolioo>
      <PortfolioTit>
        <TitleSpan>My</TitleSpan> Portfolio
      </PortfolioTit>
      <PortList>
        <li className="portfolio-item active">All</li>
        <li className="portfolio-item">HTML</li>
        <li className="portfolio-item">Photoshop</li>
        <li className="portfolio-item">Wordpress</li>
        <li className="portfolio-item">Mobile</li>
      </PortList>

      <div className="box">
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
      </div>
    </Portfolioo>
  );
}

export default Portfolio;
