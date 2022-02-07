import React, { Component } from "react";

export default class AddColorForm extends Component {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    const { _title, _color } = this.refs;
    e.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.submit}>
        <input type="text" placeholder="add title" required></input>
        <input type="color" required></input>
        <button>Add</button>
      </form>
    );
  }
}
