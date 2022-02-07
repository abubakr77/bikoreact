import React, { Component } from "react";
import { add_Remindr } from "../actions";
import { connect } from "react-redux";

class App extends Component {
  state = {
    text: "",
    date: new Date(),
  };
  render_reminder = () => {
    const reminders = this.props.reminders;
    return (
      <ul className="list-group">
        {reminders.map((reminder) => {
          return (
            <li key={reminder.id} className="list-group-item">
              <div>{reminder.text}</div>
              <div>{reminder.date}</div>
            </li>
          );
        })}
      </ul>
    );
  };
  render() {
    return (
      <div className="App">
        <img src=""></img>
        <div className="title-reminder">What Should U Do</div>
        <input
          type="text"
          placeholder="what should u do"
          className="form-control"
          onChange={(e) => this.setState({ text: e.target.value })}
        ></input>
        <input
          type="datetime-local"
          className="form-control"
          onChange={(e) => this.setState({ date: e.target.value })}
        ></input>
        <button
          className="btn btn-primary w-100"
          onClick={() =>
            this.props.add_Remindr(this.state.text, this.state.date)
          }
        >
          Add Reminder
        </button>
        {this.render_reminder()}
        <button className="btn btn-danger w-100"> Clear Reminder</button>
      </div>
    );
  }
}
// function mapDispatchToProps(dispatch) {
//   return {
//     add_Remindr: () => dispatch(add_Remindr()),
//   };
// }
function mapStP(state) {
  return { reminders: state };
}
export default connect(mapStP, { add_Remindr }, { remove_Reminder })(App);
