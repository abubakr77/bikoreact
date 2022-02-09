import React from "react";

export default function List() {
  const apple = ["orange", "apple", "banana", "strawbery"];
  const age = 347;

  return <div>{age > 34 ? <p>u alowed</p> : <p>not alowed</p>}</div>;
}
