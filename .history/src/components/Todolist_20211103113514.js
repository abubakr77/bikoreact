import React, { Component } from "react";

export default class Todolist extends Component {
  comletTask = (ind) => {
    console.log(ind);
  };
  render() {
    const todos = [
      {
        text: "learn react ",
      },
      { text: "learn node js " },
    ];
    return (
      <div>
        <ul>
          {" "}
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.text}
              <button
                onClick={() => {
                  this.comletTask(index);
                }}
              >
                done
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
