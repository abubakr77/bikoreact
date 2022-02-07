import React from "react";

export default function List() {
  const apple = ["orange", "apple", "banana", "strawbery"];

  return (
    <div>
      <ul>
        {apple.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
