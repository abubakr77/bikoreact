import React from "react";

const Form = (props) => {
  return (
    <form onSubmit={props.getW}>
      <input type="text" name="city" placeholder="City.."></input>
      <input type="text" name="country" placeholder="Conuntry.."></input>
      <button type="submit">Get Weather</button>
    </form>
  );
};
export default Form;
