import React, { Component } from "react";
import Form from "./Form";
import Weather from "./Weather";
const API_KEY = "d12de1eb4f6d6218e9f1bdbf11be0e3a";
const LINKS =
  "http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44";

class App extends Component {
  getWeather = async (e) => {
    e.preventDefault();
    const api = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=cairo%2Cegypt&appid=e36ed364400282e43250b6c4c0274d44"
    );
    const data = await api.json();
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
