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
    current: "",
  };
  updateCourse = (e) => {
    console.log(e.target.value);
  };
  addCourse = (e) => {
    console.log("iko");
  };

  render() {
    const { courses } = this.state;
    const courselist = courses.map((course, index) => {
      return <CourseList detail={course.name} key={index} />;
    });
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm upcourse={this.updateCourse} add={this.addCourse} />

        <ul>{courselist}</ul>
      </section>
    );
  }
}
