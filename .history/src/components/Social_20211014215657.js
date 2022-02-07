import React from "react";
import SocialItem from "./SocialItem";
function Social() {
  return (
    <ul className="list-group">
      <SocialItem
        id="whatsapp"
        name="Whatsapp"
        img="https://picsum.photos/200"
      />
      <SocialItem
        id="facebook"
        name="Facebook"
        ur="https://picsum.photos/200"
      />
      <SocialItem id="twiter" name="Twiter" img="https://picsum.photos/200" />
    </ul>
  );
}
export default Social;
