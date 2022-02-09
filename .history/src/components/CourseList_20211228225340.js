import React, { Component } from "react";

export default class CourseList extends Component {
  state = {
    isEdite: false,
  };
  renderCourse = () => {
    return (
      <li>
        <span> {this.props.detail}</span>{" "}
        <button onClick={() => this.toggleEditeState()}>Edit Course</button>
        <button onClick={() => this.props.dell(this.props.indexx)}>DEL</button>
      </li>
    );
  };
  toggleEditeState = () => {
    let { isEdite } = this.state;
    this.setState({ isEdite: !isEdite });
    console.log(isEdite);
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
    let { isEdite } = this.state;
    return <React.Fragment>{this.renderCourse()}</React.Fragment>;
  }
}
