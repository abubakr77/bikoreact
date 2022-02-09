import React from "react";

export default function SocialItem(props) {
  return (
    <li className="list-group-item">
      <img {props.img}/>
      <input type="checkbox" id={props.id} />
      <label htmlFor={props.id}>{props.name}</label>
    </li>
  );
}
