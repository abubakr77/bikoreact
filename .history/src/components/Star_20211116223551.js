import React from "react";

export default function Star(props) {
  // props = ({ selected = false, onClick = (f) => f }) => {
  const { selected = false, onClick = (f) => f } = props;
  return;

  <div className={selected ? "star selected" : "star"}>j</div>;
}
