import React, { Component } from "react";

export default class Todolist extends Component {
  state = {
    selectV: "2",
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
    this.setState({ todos: todoo, newTask: "" });
  };
  comletTask = (index) => {
    let todoo = [...this.state.todos];
    todoo.splice(index, 1);

    this.setState({ todos: todoo });
  };
  updateNewTask = (e) => {
    this.setState({
      newTask: e.target.value,
    });
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
        <input value={this.state.newTask} onChange={this.updateNewTask} />
        <button onClick={this.addTask}>add task</button>
        <select value={this.state.selectV}>
          <option value="1">o</option>
          <option value="2">t</option>
        </select>
      </div>
    );
  }
}
