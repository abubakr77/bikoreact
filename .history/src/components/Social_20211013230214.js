import React from "react";
function Social() {
  return (
    <ul className="list-group">
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
