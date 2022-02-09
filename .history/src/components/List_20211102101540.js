import React from "react";

export default function List() {
  const apple = ["orange", "apple", "banana", "strawbery"];

  return (
    <div>
      <ul>
        {apple.map((item, ind) => (
          <li key={ind}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
