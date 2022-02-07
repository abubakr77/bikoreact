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
      <form onSubmit={this.props.add}>
        <input type="text" defaultValue={this.props.detail}></input>
        <button type="submit">UpdateCourse</button>
      </form>
    );
  };
  render() {
    let { isEdite } = this.state;
    return (
      <React.Fragment>
        {isEdite ? this.renderUpdateForm() : this.renderCourse()}
      </React.Fragment>
    );
  }
}
