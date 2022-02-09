import React, { Component } from "react";
import CourseForm from "./CourseForm";
import CourseList from "./CourseList";

export default class App extends Component {
  state = {
    courses: [
      {
        name: "HTML",
      },
      {
        name: "CSS",
      },
      {
        name: "JQuery",
      },
    ],
  };
  render() {
    const courses = this.state.courses;
    const courselist = courses.map((item, index) => {
      return <CourseForm />;
    });
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm />
        <CourseList />
        {courselist}
      </section>
    );
  }
}
