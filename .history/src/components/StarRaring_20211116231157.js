import React, { Component } from "react";
import Star from "../components/Star";

export default class StarRaring extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starsSelected: 0,
    };
    this.change = this.change.bind(this);
  }
  change(ss) {
    this.setState({ starsSelected: ss });
  }
  render() {
    var totalStars = [];
    var starsSelected = this.state.starsSelected;
    return (
      <div className="start-rating">
        {[...Array(totalStars)].map((n, i) => (
          <Star
            key={i}
            selected={i < starsSelected}
            onclick={(i) => this.change(i + 1)}
          />
        ))}
        <p>
          {starsSelected} of {totalStars} stars
        </p>
      </div>
    );
  }
}
