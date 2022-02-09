import React, { Component } from "react";

export default class Life extends Component {
  constructor(props) {
    super(props);
    this.state = { time: Date };
  }
  render() {
    return <div>time is:{this.state.time.toLocaleDateString()}</div>;
  }
}
