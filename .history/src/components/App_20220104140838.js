import React, { Component } from "react";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <img src=""></img>
        <div className="title-reminder">What Should U Do</div>
        <input type="text" placeholder="what should u do"></input>
        <input type="datetime-local"></input>
        <button className="btn btn-primary"> Add Riminder</button>
      </div>
    );
  }
}
