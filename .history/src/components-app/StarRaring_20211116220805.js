import React, { Component } from "react";

export default class StarRaring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startSelected: 0,
    };
    this.change = this.change.bind(this);
  }
  change(ss) {
    this.setState({ startSelected: ss });
  }
  render() {
    return <div></div>;
  }
}
