import React, { Component } from "react";
import Life from "./Life";
import List from "./List";
import Well from "./Well";
import Welll from "./Welll";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.decr = this.decr.bind(this);
    this.state = {
      age: 0,
      user: [
        { id: 1, name: "biko", age: 54 },
        { id: 2, name: "biko2", age: 54 },
        { id: 3, name: "biko3", age: 54 },
      ],
    };
  }
  // state = { age: 40 };
  decr() {
    this.setState({ age: this.state.age - 1 });
  }
  render() {
    const classN = "green";
    return (
      <div>
        <h1 className={classN}>REACT TUTORIAL</h1>
        <Life />
        <List />
        <Well name="abubaker" />
        <Welll name="biko" age={this.state.age}>
          thanx
        </Welll>
        <div>
          <ul
            style={{ color: "blue", background: "skyblue", listStyle: "none" }}
          >
            {this.state.user.map((ite) => (
              <li key={ite.id}>{ite.name}</li>
            ))}
          </ul>
        </div>
        <button
          onClick={() => {
            this.setState({ age: this.state.age + 1 });
          }}
        >
          icrese
        </button>
        <button onClick={this.decr}>decr</button>
      </div>
    );
  }
}
