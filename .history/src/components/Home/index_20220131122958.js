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
        <HomeInfo>
          <HomeTitle>Abubaker Ibrahim</HomeTitle>
          <HomeInf>Creative Director</HomeInf>
          <HomeDesc>
            Iam a professional <Hspan>UX Designer</Hspan> and Front-End
            Developer creating modern and resposive designs to Web and Mobile.
            Let us work together. Thank you.
          </HomeDesc>
          <Hbtn>Let's Begin</Hbtn>
        </HomeInfo>
      </div>
    </HomeS>
  );
}

export default Home;
