import React, { Component } from "react";

export default class CourseList extends Component {
  renderCourse = () => {
    return (
      <li>
        <span> {this.props.detail}</span>{" "}
        <button onClick={() => this.props.dell(this.props.indexx)}>DEL</button>
      </li>
    );
  };
  render() {
    return <React.Fragment>{this.renderCourse}</React.Fragment>;
  }
}
