import React, { Component } from "react";

export default class Todolist extends Component {
  render() {
    const todos = [
      {
        text: "learn react",
      },
      { text: "learn react" },
    ];
    return (
      <div>
        <ul>
          {" "}
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.text}
              <button>done</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
