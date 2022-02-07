import React from "react";
const CourseForm = (props) => {
  return (
    <form>
      <input type="text" onChange={props.upcourse}></input>
      <button type="submit">Add Courese</button>
    </form>
  );
};
export default CourseForm;
