import React from "react";

export default function Star(props) {
  // props = ({ selected = false, onClick = (f) => f }) => {
  props.selected = false;
  props.onClick = (f) => f;
  return <div className={props.selected ? "star selected" : "star"}></div>;
}
