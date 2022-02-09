import React from "react";
const CourseForm = (props) => {
  return (
    <form onSubmit={props.add}>
      <input type="text" onChange={props.upcourse}></input>
      <button type="submit">Add Courese</button>
    </form>
  );
};
export default CourseForm;
