import React from "react";
const client = "progremer";
const stylee = { color: "red" };
client == "progremer" ? stylee : (stylee = { color: "red" });

function Text() {
  return (
    <p>
      {" "}
      lorem we are<span style={stylee}>Progremer</span> the world{" "}
      <span style={stylee}>Designer</span> of ui ,react is th best
    </p>
  );
}
export default Text;
