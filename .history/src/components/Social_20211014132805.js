import React from "react";
import SocialItem from "./SocialItem";
function Social() {
  return (
    <ul className="list-group">
      <SocialItem />
      <SocialItem />
      <SocialItem />
      <li className="list-group-item">
        <input type="checkbox" id="facebook" />
        <label for="facebook">facebook</label>
      </li>
      <li className="list-group-item">
        <input type="checkbox" id="whatsapp" />
        <label for="whatsapp">whatsapp</label>
      </li>
      <li className="list-group-item">
        <input type="checkbox" id="twiter" />
        <label for="twiter">twiter</label>
      </li>
    </ul>
  );
}
export default Social;
