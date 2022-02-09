import { Component } from "react";
import Well from "./Well";
class Welll extends Component {
  render() {
    return (
      <h2>
        wellcom {this.props.name} from class <span>{this.props.children}</span>
        <p>your age is:{this.props.age}</p>
        <button onClick={this.setState({ age: this.state.age + 1 })}>
          icrese
        </button>
        <button onClick={this.setState({ age: this.state.age + 1 })}>
          icrese
        </button>
      </h2>
    );
  }
}
export default Welll;
