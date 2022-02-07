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
    const { courses } = this.state;
    const courselist = courses.map((course) => {
      return <CourseList detail={course.name} />;
    });
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm />
        <CourseList />
        <ul>{courselist}</ul>
      </section>
    );
  }
}
