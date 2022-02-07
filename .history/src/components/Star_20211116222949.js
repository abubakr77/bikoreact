import React from "react";

export default function Star(props) {
  props = ({ selected = false, onClick = (f) => f }) => {
    return;
    <div className={selected ? "star selected" : "star"}>j</div>;
  };
}
