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
    this.setState({ courses, current: "" });
  };
  deleteCourse = (index) => {
    let courses = this.state.courses;
    courses.splice(index, 1);
    this.setState({ courses });
  };
  editCourse = (e, index) => {
    let { current } = this.state;
    current = e.target.value;
  };

  render() {
    const { courses } = this.state;
    const courselist = courses.map((course, index) => {
      return (
        <CourseList
          detail={course.name}
          key={index}
          indexx={index}
          dell={this.deleteCourse}
        />
      );
    });
    return (
      <section className="App">
        <h2>Add Course</h2>
        <CourseForm
          upcourse={this.updateCourse}
          add={this.addCourse}
          cr={this.state.current}
        />

        <ul>{courselist}</ul>
      </section>
    );
  }
}
