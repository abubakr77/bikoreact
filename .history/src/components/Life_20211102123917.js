import React, { Component } from "react";

export default class Life extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }
  componentDidMount() {}
  render() {
    return <div>time is:{this.state.time.toLocaleTimeString()}</div>;
  }
}
