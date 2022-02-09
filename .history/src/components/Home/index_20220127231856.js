import React from "react";
import "./style.js";
import {
  HomeS,
  HomeInfo,
  HomeInf,
  HomeDesc,
  Hspan,
  HomeTitle,
  Hbtn,
} from "./style.js";

function Home() {
  return (
    <HomeS>
      <div className="container">
        <div className="home-information">
          <h2 className="home-title margin-bottom">Hamza Nabil</h2>
          <h4 className="home-info">Creative Director</h4>
          <p className="home-desc">
            Iam a professional <span>UX Designer</span> and Front-End Developer
            creating modern and resposive designs to Web and Mobile. Let us work
            together. Thank you.
          </p>
          <button className="home-btn">Let's Begin</button>
        </div>
      </div>
    </HomeS>
  );
}

export default Home;
