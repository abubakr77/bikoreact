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
    axios.get("js/data.json").then((res) => {
      setSoial(res.data.social);
    });
  }, []);
  const socialList = socil.map((unit) => {
    return (
      <SocialS item={unit.id} key={unit.id}>
        <Sicon className={unit.icon_name}></Sicon>
        <SocilP>
          <SpSpinfo>{unit.title}</SpSpinfo>
          <SinfoTwo>{unit.body}</SinfoTwo>
        </SocilP>
      </SocialS>
    );
  });
  return <SocialSection>{socialList}</SocialSection>;
}

export default Socialmedia;
