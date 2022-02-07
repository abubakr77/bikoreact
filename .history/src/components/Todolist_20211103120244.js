import React, { Component } from "react";

export default class Todolist extends Component {
  state = {
    todos: [
      {
        text: "learn react ",
      },
      { text: "learn node js " },
    ],
  };
  comletTask = (index) => {
    let todoo = [...this.state.todos];
    todoo.splice(index, 1);
    console.log(todoo);
    this.setState({ todoo });
  };
  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map((todo, index) => (
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
        <input></input>
        <button>add task</button>
      </div>
    );
  }
}
