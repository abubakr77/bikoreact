import React from "react";

function Header() {
  const client = "Progremer";
  let title = client == "Progremer" ? "Progremer " : "design ";

  return (
    <div className="navbar bg-dark rounded">
      <h1 className="text-white ">{title}</h1>
    </div>
  );
}
export default Header;
