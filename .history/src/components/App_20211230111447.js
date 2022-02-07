import React, { Component } from "react";
import Form from "./Form";
import Weather from "./Weather";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Form />
        <Weather />
      </div>
    );
  }
}

export default App;
