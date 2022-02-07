import React, { Component } from "react";
import { add_Remindr } from "../actions";

export default class App extends Component {
  state = {
    text: "",
    date: new Date(),
  };
  render() {
    return (
      <div className="App">
        <img src=""></img>
        <div className="title-reminder">What Should U Do</div>
        <input
          type="text"
          placeholder="what should u do"
          className="form-control"
        ></input>
        <input type="datetime-local" className="form-control"></input>
        <button className="btn btn-primary w-100"> Add Reminder</button>
        <button className="btn btn-danger w-100"> Clear Reminder</button>
      </div>
    );
  }
  function mapDispatchToProps(dispatch){
    return{
      add_Remindr:()=>dispatch(add_Remindr())
    }

  }
}
