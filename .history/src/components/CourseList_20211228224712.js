import React, { Component } from "react";

export default class CourseList extends Component {
  state = {
    isEdite: false,
  };
  renderCourse = () => {
    return (
      <li>
        <span> {this.props.detail}</span> <button>Edit Course</button>
        <button onClick={() => this.props.dell(this.props.indexx)}>DEL</button>
      </li>
    );
  };
  toggleEditeState = () => {
    let { isEdite } = this.state;
    this.setState({ isEdite: !isEdite });
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
