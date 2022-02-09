import React from "react";
import { Link } from "react-router-dom";

function Navebar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/b">port</Link>
    </div>
  );
}

export default Navebar;
