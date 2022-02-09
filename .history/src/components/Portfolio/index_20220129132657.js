import React from "react";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio-title">
        <span>My</span> Portfolio
      </h2>
      <ul className="portfolio-list">
        <li className="portfolio-item active">All</li>
        <li className="portfolio-item">HTML</li>
        <li className="portfolio-item">Photoshop</li>
        <li className="portfolio-item">Wordpress</li>
        <li className="portfolio-item">Mobile</li>
      </ul>

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
    </div>
  );
}

export default Portfolio;
