import React from "react";

export default function SocialItem(props) {
  return (
    <li className="list-group-item">
      <img src={props.p.ur} alt={`icon of ${props.p.id}`} />
      <input type="checkbox" id={props.p.id} />
      <label htmlFor={props.p.id}>{props.p.name}</label>
    </li>
  );
}
