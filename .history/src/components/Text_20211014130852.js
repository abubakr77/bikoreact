import React from "react";
const client = "progremer";
let stylee = { color: "red" };

if (client == "progremer") {
  stylee = stylee;
} else {
}

function Text() {
  return (
    <p>
      lorem we are<span style={stylee}></span>
      <span>Progremer</span> the world <span style={stylee}>Designer</span> of
      ui ,react is th best
    </p>
  );
}
export default Text;
