import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  // increase = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };
  // decrease1 = () => {
  //   this.setState({
  //     count: this.state.count - 1,
  //   });
  // };
  // decrease = () => {};
  render() {
    return (
      <div>
        <button onClick={this.props.increase}>+</button>
        <div>{this.props.count}</div>
        <button onClick={this.decrease}>-</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { count: state.count };
}
function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch({ type: "INCREASE" }),
    dec: () => dispatch({ type: "DECREASE" }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
