import React, { Component } from "react";

export default class App extends Component {
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
        <button className="btn btn-block btn-primary"> Add Reminder</button>
      </div>
    );
  }
}
