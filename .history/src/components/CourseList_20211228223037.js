import React, { Component } from "react";

export default class CourseList extends Component {
  render() {
    return (
      <React.Fragment>
        <li>
          <span> {this.props.detail}</span>{" "}
          <button onClick={() => this.props.dell(this.props.indexx)}>
            DEL
          </button>
        </li>
      </React.Fragment>
    );
  }
}
