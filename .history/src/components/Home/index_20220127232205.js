Himport React from "react";
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
        <HomeInfo>
          <h2 className="home-title margin-bottom">Hamza Nabil</h2>
          <HomeInf>Creative Director</HomeInf>
          <p className="home-desc">
            Iam a professional <span>UX Designer</span> and Front-End Developer
            creating modern and resposive designs to Web and Mobile. Let us work
            together. Thank you.
          </p>
          <button className="home-btn">Let's Begin</button>
        </HomeInfo>
      </div>
    </HomeS>
  );
}

export default Home;
