import axios from "axios";
import React, { useState, useEffect } from "react";

import {
  Sicon,
  SinfoTwo,
  SocialS,
  SocialSection,
  SocilP,
  SpSpinfo,
} from "./style.js";

function Socialmedia() {
  const [socil, setSoial] = useState([]);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    axios.get("js/data.json").then((res) => {
      useState(res.data.social);
    });
  }, []);
  return (
    <SocialSection>
      <SocialS item={1} key={1}>
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
