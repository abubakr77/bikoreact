import React, { Component } from "react";

export default class CourseList extends Component {
  render() {
    return (
      <React.Fragment>
        <li>{this.props.detail}</li>
      </React.Fragment>
    );
  }
}
