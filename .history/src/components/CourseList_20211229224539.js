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
        <span> {this.props.zz === 3 ? <h1>uuuu</h1> : ""}</span>
      </li>
    );
  };
  toggleEditeState = () => {
    let { isEdite } = this.state;
    this.setState({ isEdite: !isEdite });
    console.log(isEdite);
  };
  editToggil = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.indexx, this.input.value);
    this.toggleEditeState();
  };
  renderUpdateForm = () => {
    return (
      <form onSubmit={this.editToggil}>
        <input
          type="text"
          defaultValue={this.props.detail}
          ref={(v) => (this.input = v)}
        ></input>
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
