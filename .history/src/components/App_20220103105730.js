import React, { Component } from "react";
import { connect } from "react-redux";
import { increase } from "../actions/action";

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
        <button onClick={this.props.dec}>-</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { count: state.count };
}
function mapDispatchToProps(dispatch) {
  return {
    increase: () => dispatch(increase()),
    dec: () => dispatch({ type: "DECREASE" }),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
