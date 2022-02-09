import React, { Component } from "react";

export default class CourseList extends Component {
  renderCourse = () => {
    return (
      <li>
        <span> {this.props.detail}</span> <button>Edit Course</button>
        <button onClick={() => this.props.dell(this.props.indexx)}>DEL</button>
      </li>
    );
  };
  renderUpdateForm = () => {
    return (
      <form>
        <input type="text"></input>
        <button>UpdateCourse</button>
      </form>
    );
  };
  render() {
    return <React.Fragment>{this.renderCourse()}</React.Fragment>;
  }
}
