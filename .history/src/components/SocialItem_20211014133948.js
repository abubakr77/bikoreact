import React from "react";

export default function SocialItem(props) {
  return (
    <li className="list-group-item">
      <input type="checkbox" id={props.id} />
      <label for={props.id}>{props.name}</label>
    </li>
  );
}
