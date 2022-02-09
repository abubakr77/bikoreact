import React from "react";
import SocialItem from "./SocialItem";
function Social() {
  return (
    <ul className="list-group">
      <SocialItem id="whatsapp" name="Whatsapp" />
      <SocialItem id="facebook" name="Facebook" />
      <SocialItem id="twiter" name="Twiter" />
    </ul>
  );
}
export default Social;
