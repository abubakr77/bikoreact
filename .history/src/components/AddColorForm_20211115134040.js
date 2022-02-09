import React, { Component } from "react";

export default class AddColorForm extends Component {
  render() {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="add title" required></input>
        <input type="color" required></input>
        <button>Add</button>
      </form>
    );
  }
}
