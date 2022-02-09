import React, { Component } from "react";

export default class Todolist extends Component {
  state = {
    newTask: "",
    todos: [
      {
        text: "learn react ",
      },
      { text: "learn node js " },
    ],
  };
  addTask = () => {
    let todoo = [...this.state.todos];
    todoo.push({
      text: this.state.newTask,
    });
  };
  comletTask = (index) => {
    let todoo = [...this.state.todos];
    todoo.splice(index, 1);
    console.log(todoo);
    this.setState({ todos: todoo });
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
        <input value={this.state.newTask} />
        <button onClick={this.addTask}>add task</button>
      </div>
    );
  }
}
