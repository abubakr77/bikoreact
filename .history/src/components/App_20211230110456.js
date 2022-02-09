import React, { Component } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

class App extends Component {
  render() {
    return <div>wellcome</div>;
  }
}

export default connect(mapStateToProps)(App);
