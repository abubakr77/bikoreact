import React, { Component } from "react";
import Form from "./Form";
import Weather from "./Weather";
const API_KEY = "d12de1eb4f6d6218e9f1bdbf11be0e3a";

class App extends Component {
  getWeather = (e) => {
    e.preventDefault();
    console.log("weee");
  };
  render() {
    return (
      <div className="App">
        <Form getW={this.getWeather} />
        <Weather />
      </div>
    );
  }
}

export default App;
