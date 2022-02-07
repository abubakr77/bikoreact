import React, { Component } from "react";

export default class Life extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date() });
    });
  }
  render() {
    return <div>time is:{this.state.time.toLocaleTimeString()}</div>;
  }
}
