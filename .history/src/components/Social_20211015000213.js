import React from "react";
import SocialItem from "./SocialItem";
function Social() {
  return (
    <ul className="list-group">
      <SocialItem
        p={{
          id: "whatsapp",
          name: "Whatsapp",
          img: "https://picsum.photos/60",
        }}
      />
      <SocialItem
        p={{ id: "facebook", name: "Facebook", ur: "https://picsum.photos/61" }}
      />
      <SocialItem
        p={{ id: "twiter", name: "Twiter", img: "https://picsum.photos/62" }}
      />
    </ul>
  );
}
export default Social;
