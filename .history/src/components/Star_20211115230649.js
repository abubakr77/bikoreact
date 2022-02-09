import React from "react";

export default function Star() {
  const star = ({ selected = false, onClick = (f) => f }) => {
    <div className={selected ? "star selected" : "star"}></div>;
  };
}
