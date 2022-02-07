import React, { Component } from "react";

export default class CourseList extends Component {
  render() {
    return <li>{this.props.detail.name}</li>;
  }
}
