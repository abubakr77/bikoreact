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
    this.setState({
      current: e.target.value,
    });
  };
  addCourse = (e) => {
    e.preventDefault();
    let { current } = this.state;
    let courses = this.state.courses;
    courses.push({ name: current });
    this.setState({ courses });
    e.target.value = "";
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
