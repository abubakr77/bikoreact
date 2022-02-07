import React from "react";
import SocialItem from "./SocialItem";
function Social() {
  return (
    <ul className="list-group">
      <SocialItem id="whatsapp" name="Whatsapp" />
      <SocialItem />
      <SocialItem />
    </ul>
  );
}
export default Social;
