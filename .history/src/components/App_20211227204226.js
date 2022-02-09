import React, { Component } from "react";
import CourseForm from "./CourseForm";

export default class App extends Component {
  render() {
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm />
      </section>
    );
  }
}
