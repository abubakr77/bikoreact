import React from "react";
import {
  Sicon,
  SinfoTwo,
  SocialS,
  SocialSection,
  SocilP,
  SpSpinfo,
} from "./style.js";

function Socialmedia() {
  return (
    <SocialSection>
      <SocialS>
        <Sicon className="icon fa fa-facebook fa-lg"></Sicon>
        <SocilP>
          <SpSpinfo>Follow Me on</SpSpinfo>
          <SinfoTwo>Social Facebook</SinfoTwo>
        </SocilP>
      </SocialS>
    </SocialSection>
  );
}

export default Socialmedia;
