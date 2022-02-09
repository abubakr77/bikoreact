import React, { Component } from "react";
import Form from "./Form";
import Weather from "./Weather";

class App extends Component {
  getWeather = () => {
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
