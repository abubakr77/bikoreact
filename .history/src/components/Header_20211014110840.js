import React from "react";

function Header() {
  let title = "";
  const client = "Designer";
  if (client == "Designer") {
    title = "Designer is my live";
  } else {
    title = "Progremer is my live";
  }
  return (
    <div className="navbar bg-dark rounded">
      <h1 className="text-white ">{title}</h1>
    </div>
  );
}
export default Header;
