import React, { Component } from "react";
import CourseForm from "./CourseForm";
import CourseList from "./CourseList";

export default class App extends Component {
  state = {
    courses: [
      {
        name: "HTML",
      },
    ],
  };
  render() {
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm />
        <CourseList />
      </section>
    );
  }
}
