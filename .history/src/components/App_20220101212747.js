import React, { Component } from "react";

export default class App extends Component {
  state = {
    count: 0,
  };
  render() {
    return (
      <div>
        <button>+</button>
        <div>{this.state.count}</div>
        <button>-</button>
      </div>
    );
  }
}
